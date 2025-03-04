// Random integer from 0 to length-1
const randomNumber = (length) => {
  return Math.floor(Math.random() * length);
};

const randomData = (data) => {
  return data[randomNumber(data.length)];
};

module.exports = { randomNumber, randomData };
