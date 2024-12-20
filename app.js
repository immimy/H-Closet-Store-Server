require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();
// rest of the packages
const cookieParser = require('cookie-parser');
const cors = require('cors');
// database
const connectDB = require('./db/connectDB');
// routers
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
// middleware
const notFoundMiddleware = require('./middleware/notFound');
const errorsHandlerMiddleware = require('./middleware/errorHandler');

app.use(cors());

app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
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
