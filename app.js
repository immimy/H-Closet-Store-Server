require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connectDB');
const productsRouter = require('./routes/products');

const cors = require('cors');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/products', productsRouter);

// error handler

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
