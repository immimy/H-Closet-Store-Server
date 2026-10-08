const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = require('../db/connectDB');
const User = require('../models/User');
const Order = require('../models/Order');

const oldTtlMatcher = (index) =>
  index.name === 'Partial-TTL-Index' && index.key?.createdAt === 1;

async function dropIndex(model) {
  const indexes = await model.collection.listIndexes().toArray();
  const oldIndex = indexes.find(oldTtlMatcher);

  if (oldIndex) {
    await model.collection.dropIndex(oldIndex.name);
    console.log(`Dropped old index: ${oldIndex.name}`);
  }
}

// Since MongoDB does not support index rename, drop and recreate indexes.
async function migrateTtlIndex() {
  try {
    await connectDB(process.env.MONGO_URI);

    // Drop the existing indexes
    await dropIndex(User);
    await dropIndex(Order);

    // Create new indexes
    await User.collection.createIndex(
      { createdAt: 1 },
      {
        name: 'registered_users_ttl_1d',
        partialFilterExpression: { role: 'user', isPersisted: false },
        expireAfterSeconds: 86400, // 1d
      },
    );
    await Order.collection.createIndex(
      { createdAt: 1 },
      {
        name: 'pending_orders_ttl_24h',
        partialFilterExpression: { status: 'Pending' },
        expireAfterSeconds: 86400, // 1d
      },
    );
    await Order.collection.createIndex(
      { createdAt: 1 },
      {
        name: 'non_persisted_orders_ttl_3d',
        partialFilterExpression: { isPersisted: false },
        expireAfterSeconds: 259200, // 3d
      },
    );

    console.log('Migrate TTL index name successfully');
  } finally {
    await mongoose.disconnect();
  }
}

migrateTtlIndex().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
