import express from "express";
// require('dotenv').config();
import dotenv from "dotenv"
import colors from "colors";
import morgan from "morgan";
import cors from "cors";

import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import users from "./routes/userRoutes.js";
import accounts from "./routes/AcountRouts.js";

dotenv.config({path: './config/config.env'})

connectDB();

const app = express();

app.use(cors());

// Body parser middleware
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use("/api/v1/accounts", accounts);

app.use('/api/v1/users', users);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
.green.underline.bold));