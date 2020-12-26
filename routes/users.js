
const express = require('express');
const router = express.Router();

const { getUsers, postUsers, deleteUser } = require('./../models/usersModel');

router
    .route('/')
    .get(getUsers)

router
    .route('/add')
    .post(postUsers)

router
    .route('/:id')
    .delete(deleteUser)


module.exports= router