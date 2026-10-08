require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../db/connectDB');

const collectionName = 'orders';

async function enableOrderImages() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not set');
    }

    await connectDB(process.env.MONGO_URI);

    const db = mongoose.connection.getClient().db();
    const collection = await db
      .listCollections({ name: collectionName })
      .next();

    if (collection) {
      await db.command({
        collMod: collectionName,
        changeStreamPreAndPostImages: { enabled: true },
      });
    } else {
      await db.createCollection(collectionName, {
        changeStreamPreAndPostImages: { enabled: true },
      });
    }

    const updated = await db.listCollections({ name: collectionName }).next();

    if (!updated?.options?.changeStreamPreAndPostImages?.enabled) {
      throw new Error('Could not enable pre/post images for orders');
    }

    console.log('Pre/post images enabled for orders.');
  } finally {
    await mongoose.disconnect();
  }
}

enableOrderImages().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
