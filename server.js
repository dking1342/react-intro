
// packages
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// init dotenv file
dotenv.config({path: './config/config.env'});

// init express app and parsers
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// init routes file
const { router } = require('./routes/transactions')
app.use('/api/v1/transactions',router);

// init server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running in ${ process.env.NODE_ENV } mode on PORT ${PORT}`.yellow.bold));