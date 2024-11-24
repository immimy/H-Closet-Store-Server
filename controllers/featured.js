const Featured = require('../models/featured');
const Bag = require('../models/bag');
const Clothes = require('../models/clothes');
const Accessory = require('../models/accessory');

const { createSingleValueOfArray } = require('../utilities/convertArray');

const getAllFeaturedProducts = async (req, res) => {
  const { category } = req.query;
  const featuredProducts = await Featured.find({ category });
  const productIdentifiers = createSingleValueOfArray({
    array: featuredProducts,
    key: 'productID',
  });

  let products;
  if (category === 'bag') {
    products = await Bag.find({ _id: { $in: productIdentifiers } });
  }
  if (category === 'clothes') {
    products = await Clothes.find({ _id: { $in: productIdentifiers } });
  }
  if (category === 'accessory') {
    products = await Accessory.find({ _id: { $in: productIdentifiers } });
  }
  // BEST SELLER

  res.status(200).json({ product_count: products.length, products });
};

module.exports = {
  getAllFeaturedProducts,
};
