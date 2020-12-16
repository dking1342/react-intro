
const Transactions = require('./../Models/transactionsModel');

// @des     Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
const getTransactions = async (req,res,next) => {

    const transactions = await Transactions.find();

    if(transactions.success === false){
        return res.status(500).json(transactions)
    } else {
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    }
};

// @des     Add transactions
// @route   POST /api/v1/transactions
// @access  Public
const addTransactions = async (req,res,next) => {

    const transaction = await Transactions.create(req.body);
    
    if(transaction.success === false){
        if(transaction.error.name === 'ValidationError'){
            const messages = Object.values(transaction.error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })    
        }
    } else {
        return res.status(200).json({
            success: true,
            data: transaction
        })
    }
};

// @des     Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
const deleteTransactions = async (req,res,next) => {

    const transaction = await Transactions.deletes(req.params)

    if(transaction.success === false){
        return res.status(404).json(transaction);
    } else {
        return res.status(200).json({
            success: true,
            data: transaction
        });
    }
};


module.exports = {
    getTransactions,
    addTransactions,
    deleteTransactions
}