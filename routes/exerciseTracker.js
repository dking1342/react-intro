
const express = require('express');
const router = express.Router();
const cors = require('cors');

const { getExercise, postExercise, findOneExercise, deleteExcersie, updateExercise } = require('./../models/exercisesModel')

router
    .route('/')
    .get(getExercise)
    
router.delete('/:id',cors(),(req,res)=> deleteExcersie(req,res))
router.put('/:id',cors(),(req,res)=> updateExercise(req,res))
router.get('/:id',cors(),(req,res)=> findOneExercise(req,res))

router
    .route('/add')
    .post(postExercise)





module.exports = router