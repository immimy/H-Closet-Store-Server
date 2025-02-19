const crypto = require('crypto');

const generateSecureRandomString = ({ bytes }) => {
  return crypto.randomBytes(bytes).toString('hex');
};

const hashString = (string) => {
  return crypto.createHash('md5').update(string).digest('hex');
};

module.exports = { generateSecureRandomString, hashString };
