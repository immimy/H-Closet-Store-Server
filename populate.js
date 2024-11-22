require('dotenv').config();
const connectDB = require('./db/connectDB');
// models
const Bag = require('./models/bag');
const Clothes = require('./models/clothes');
const Accessory = require('./models/accessory');
const Featured = require('./models/featured');
// json data
const jsonBags = require('./data/bags.json');
const jsonClothes = require('./data/clothes.json');
const jsonAccessories = require('./data/accessories.json');
const jsonFeatured = require('./data/featured.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    // await Bag.deleteMany();
    // await Bag.create(jsonBags);

    // await Clothes.deleteMany();
    // await Clothes.create(jsonClothes);

    // await Accessory.deleteMany();
    // await Accessory.create(jsonAccessories);

    await Featured.deleteMany();
    await Featured.create(jsonFeatured);

    console.log('Populate data successfully!!!');

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
