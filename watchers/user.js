const User = require('../models/User');
const Order = require('../models/Order');
const Token = require('../models/Token');

const handleUserChange = async (change) => {
  if (change.operationType !== 'delete') return;

  const results = await Promise.allSettled([
    Order.deleteMany({ user: change.documentKey._id }),
    Token.deleteMany({ user: change.documentKey._id }),
  ]);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('User cleanup action failed:', result.reason);
    }
  }
};

// When deleting a registered user, also remove their associated token and orders belonging to that user.
const userCleanup = async () => {
  const changeStream = User.watch();

  changeStream.on('change', async (change) => {
    void handleUserChange(change).catch((error) => {
      console.error('Failed to handle user change:', error);
    });
  });

  changeStream.on('error', (error) => {
    console.error('User change stream error:', error);
    process.exit(1);
  });
};

module.exports = userCleanup;
