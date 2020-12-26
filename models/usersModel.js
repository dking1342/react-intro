
const Users = require('./../config/usersDb');

// @des     Gets the users
// @route   GET /users/
// @access  Public
const getUsers = async (req,res) => {
    try {
        const users = await Users.find();
        res.status(200).json({success:true, count:users.length, payload:users});
    } catch (error) {
        res.status(400).json({success:false, payload: error})
    }
}

// @des     Creates a user
// @route   POST /users/
// @access  Public
const postUsers = async (req,res) => {
    try {
        let { username } = req.body;
        const user = await Users.create({username});
        res.status(201).json({success: true, payload: user});        
    } catch (error) {
        res.status(400).json({success: false, payload: error});
    }
}

// @des     Deletes a user
// @route   DELETE /users/:id
// @access  Public
const deleteUser = async (req,res) => {
    try {
        let { id } = req.params;
        let user = await Users.deleteOne({_id:id});
        res.status(200).json({success: true, payload:user})
    } catch (error) {
        res.status(404).json({success: false, payload:error})
    }
}

module.exports = {
    getUsers,
    postUsers,
    deleteUser
}