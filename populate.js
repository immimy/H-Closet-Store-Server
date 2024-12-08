require('dotenv').config();
const connectDB = require('./db/connectDB');
// models
const Product = require('./models/product');
// json data
const jsonProducts = require('./data/products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    await Product.deleteMany();
    await Product.create(jsonProducts);

    console.log('Populate data successfully!!!');

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
