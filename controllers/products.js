const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  // Variables
  // 1. Search/Filter functionalities
  const { search, category, price, brand, featured, promotion } = req.query;
  // 2. Sort functionality
  // -- NOTE --
  // Sorting with the key that consists of duplicate values will result in repeating docs.
  // In order to fix the issue, add unique field along with our desirable field.
  let sort = req.query.sort ? `${req.query.sort} _id` : '-createdAt _id';
  if (req.query.sort?.includes('price')) {
    sort = sort.replace('price', 'sellingPrice');
  }
  // 3. Pagination functionality
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
  if (promotion) {
    queryObject.isOnSale = true;
  }

  // Count total products
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
  const { id: productID } = req.params;
  const product = await Product.findById(productID);
  res.status(StatusCodes.OK).json({ data: { product } });
};

const getBestsellerProducts = async (req, res) => {
  const limit = req.query.limit || 10;
  const products = await Product.find({})
    .sort('-salesFigures _id')
    .limit(limit);
  res.status(StatusCodes.OK).json({ productCount: products.length, products });
};

const updateProduct = async (req, res) => {
  const { id: productID } = req.params;
  const { price, isOnSale, discount } = req.body;

  const product = await Product.findById(productID);
  product.price = price;
  product.isOnSale = isOnSale;
  product.discount = discount;
  await product.save();

  res.status(StatusCodes.OK).json({ product });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  getBestsellerProducts,
  updateProduct,
};
