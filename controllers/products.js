const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  // Variables
  // - search/filter/sort functionalities
  const { search, category, price, brand, featured } = req.query;
  const sort = req.query.sort ? `${req.query.sort} _id` : '-createdAt _id';
  // -- NOTE --
  // Sorting with the key that consists of duplicate values will result in repeating docs.
  // In order to fix the issue, add unique field along with our desirable field.
  // - pagination functionality
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const skip = (page - 1) * limit;

  // Create query object
  let queryObject = {};
  if (search) {
    queryObject.name = { $regex: search, $options: 'i' };
  }
  if (category && category !== 'all') {
    queryObject.category = category;
  }
  if (price) {
    queryObject.price = { $lte: price };
  }
  if (brand && brand !== 'all') {
    queryObject.brand = brand;
  }
  if (featured) {
    queryObject.featured = true;
  }

  // Get total products
  const totalProduct = await Product.countDocuments(queryObject);

  // Get all products query
  const products = await Product.find(queryObject)
    .select('-description')
    .sort(sort)
    .skip(skip)
    .limit(limit);

  // Get enum values
  const brandList = ['all', ...Product.schema.path('brand').enumValues];
  const categoryList = ['all', ...Product.schema.path('category').enumValues];

  // Data to send back
  const meta = {
    enum: { brandList, categoryList },
    pagination: {
      totalProduct,
      currentPage: page,
      totalPage: Math.ceil(totalProduct / limit) || 1,
    },
  };
  const data = { productCount: products.length, products };

  res.status(StatusCodes.OK).json({ meta, data });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findById(productId);
  res.status(StatusCodes.OK).json({ data: { product } });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
};
