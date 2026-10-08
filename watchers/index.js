const userStream = require('./user');
const orderStream = require('./order');

const startWatchers = async () => {
  const streams = await Promise.all([userStream(), orderStream()]);
  return streams;
};

module.exports = startWatchers;
