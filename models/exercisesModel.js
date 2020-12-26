
const Exercises = require('./../config/exerciseTrackerDb');

// @des     Gets the exercises
// @route   GET /
// @access  Public
const getExercise = async (req,res) => {
    try {
        const exercises = await Exercises.find();
        res.status(200).json({success:true, count: exercises.length, payload:exercises})        
    } catch (error) {
        res.status(400).json({success:false, payload: error})
    }
}

// @des     Creates an exercise
// @route   POST /
// @access  Public
const postExercise = async (req,res) => {
    try {
        const { username, description, duration, date } = req.body;
        const newDate = Date.parse(date);
        const exercise = await Exercises.create({username, description,duration,date:newDate });
        res.status(201).json({success:true, payload: exercise});
    } catch (error) {
        res.status(400).json({success:false, payload: error});
    }
}

// @des     Gets an exercise by id
// @route   GET /:id
// @access  Public
const findOneExercise = async (req,res) => {
    try {
        const { id } = req.params;
        const exercise = await Exercises.findById(id);
        res.status(200).json({success:true, payload: exercise});
    } catch (error) {
        res.status(400).json({success:false, payload: error});        
    }
}

// @des     Deletes an exercise
// @route   DELETE /:id
// @access  Public
const deleteExcersie = async (req,res) => {
    try {
        const { id } = req.params;
        const exercise = await Exercises.deleteOne({_id: id});
        res.status(200).json({success:true, payload: exercise});        
    } catch (error) {
        res.status(400).json({success:false, payload: error});
    }
}

// @des     Updates an exercise
// @route   PUT /:id
// @access  Public
const updateExercise = async (req,res) => {
    try {
        const { id } = req.params;
        const exerciseById = await Exercises.findById(id);

        let usernameOld = exerciseById.username;
        let descriptionOld = exerciseById.description;
        let durationOld = exerciseById.duration;
        let dateOld = exerciseById.date;        

        let usernameNew = req.body.username;
        let descriptionNew = req.body.description;
        let durationNew = req.body.duration;
        let dateNew = req.body.date;        
        
        let username = usernameNew || usernameOld;
        let description = descriptionNew || descriptionOld;
        let duration = durationNew || durationOld;
        let date = dateNew || dateOld;

        const exercise = await Exercises.updateOne({_id:id},{username,description,duration,date})
        res.status(200).json({success:true, payload: exercise});                
    } catch (error) {
        res.status(400).json({success:false, payload: error});        
    }
}

module.exports={
    getExercise,
    postExercise,
    findOneExercise,
    deleteExcersie,
    updateExercise
}