const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const pingServer = async (_, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Ping H-Closet-Store server' });
};

const dbAlive = async (_, res) => {
  const productCount = await Product.countDocuments({});
  res
    .status(StatusCodes.OK)
    .json({ msg: `H-Closet-store has ${productCount} products.` });
};

module.exports = { pingServer, dbAlive };
