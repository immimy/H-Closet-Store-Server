require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();

const connectDB = require('./db/connectDB');
const productsRouter = require('./routes/products');
// middleware
const notFoundMiddleware = require('./middleware/notFound');
const errorsHandlerMiddleware = require('./middleware/errorHandler');

const cors = require('cors');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorsHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
