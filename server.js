
// npm packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// dotenv init
dotenv.config({path: './config/config.env'});

// express init and parsers
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// init cors
app.use(cors());

// routes
const exerciseRouter = require('./routes/exerciseTracker');
const usersRouter = require('./routes/users');
app.use('/exercises', exerciseRouter);
app.use('/users',usersRouter);

console.log(process.env.NODE_ENV);

// init server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server running on PORT ${PORT}`));