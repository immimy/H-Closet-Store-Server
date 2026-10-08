const Order = require('../models/Order');
const { cancelPaymentIntent } = require('../utilities/payment');
const { manipulateProducts } = require('../utilities/order');

const handleOrderChange = async (change) => {
  if (change.operationType !== 'delete') return;

  const order = change.fullDocumentBeforeChange;
  if (!order || order?.status !== 'Pending') return;

  const paymentIntentID = order.clientSecret?.split('_').slice(0, 2).join('_');

  const actions = [
    // update product inventory (+)
    manipulateProducts({
      orderItems: order.orderItems,
      updateInventory: 'increase',
    }),
  ];

  if (paymentIntentID) {
    // cancel payment intent
    actions.push(cancelPaymentIntent({ paymentIntentID }));
  } else if (order.paymentMethod === 'credit card') {
    console.error('Pending card order has no payment intent ID:', order._id);
  }

  const results = await Promise.allSettled(actions);

  for (const result of results) {
    if (result.status === 'rejected') {
      console.error('Order cleanup action failed:', result.reason);
    }
  }
};

// FIX BUG
// Client doesn't check out until MongoDB automatically deletes that order by TTL indexes,
// so we need to update product inventory (+)
// and cancel payment intent to Stripe.
const orderCleanup = async () => {
  const changeStream = Order.watch([], {
    fullDocumentBeforeChange: 'whenAvailable',
  });

  changeStream.on('change', async (change) => {
    void handleOrderChange(change).catch((error) => {
      console.error('Failed to handle order change:', error);
    });
  });

  changeStream.on('error', (error) => {
    console.error('Order change stream error:', error);
    process.exit(1);
  });
};

module.exports = orderCleanup;
