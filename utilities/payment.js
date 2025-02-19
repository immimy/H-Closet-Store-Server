const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async ({ amount, currency }) => {
  // Stripe use minor unit,
  // so multiply by 100 to convert currency into minor unit.
  // (1000 to charge 10฿)
  const orderTotal = Number((amount * 100).toFixed(0));

  const paymentIntent = await stripe.paymentIntents.create({
    amount: orderTotal,
    currency,
  });

  return { clientSecret: paymentIntent.client_secret };
};

const cancelPaymentIntent = async ({ paymentIntentID }) => {
  return stripe.paymentIntents.cancel(paymentIntentID);
};

module.exports = { createPaymentIntent, cancelPaymentIntent };
