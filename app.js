require('dotenv').config();
require('express-async-errors');

// express
const express = require('express');
const app = express();
// rest of the packages
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
// database
const connectDB = require('./db/connectDB');
// routers
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const reviewsRouter = require('./routes/reviews');
// middleware
const notFoundMiddleware = require('./middleware/notFound');
const errorsHandlerMiddleware = require('./middleware/errorHandler');

// Due to cookies are available only on the same domain,
// set up the origin and credentials options
// to only allows cross-site requests from our front-end
// and properly send back cookies to the frond-end site.
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 1000 * 60 * 15, // 15 minutes
    limit: 100,
  })
);
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/reviews', reviewsRouter);

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
