const Featured = require('../models/featured');
const Bag = require('../models/bag');
const Clothes = require('../models/clothes');
const Accessory = require('../models/accessory');

const { createSingleValueOfArray } = require('../utilities/convertArray');

const getAllBags = async (req, res) => {
  const featuredBags = await Featured.find({ category: 'bag' });
  const productIdentifiers = createSingleValueOfArray({
    array: featuredBags,
    key: 'productID',
  });
  const result = await Bag.find({ _id: { $in: productIdentifiers } });

  res.status(200).json({ count: result.length, result });
};

const getAllClothes = async (req, res) => {
  const featuredClothes = await Featured.find({ category: 'clothes' });
  const productIdentifiers = createSingleValueOfArray({
    array: featuredClothes,
    key: 'productID',
  });
  const result = await Clothes.find({ _id: { $in: productIdentifiers } });

  res.status(200).json({ count: result.length, result });
};

const getAllAccessories = async (req, res) => {
  const featuredAccessories = await Featured.find({ category: 'accessory' });
  const productIdentifiers = createSingleValueOfArray({
    array: featuredAccessories,
    key: 'productID',
  });
  const result = await Accessory.find({ _id: { $in: productIdentifiers } });

  res.status(200).json({ count: result.length, result });
};

const getAllBestSeller = async (req, res) => {};

module.exports = {
  getAllBags,
  getAllClothes,
  getAllAccessories,
  getAllBestSeller,
};
