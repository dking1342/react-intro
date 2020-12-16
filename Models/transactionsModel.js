const mongoose = require('mongoose');
const { connection } = require('./../config/db');
const Transactions = connection.models.Transactions;

const find = () => {
    return new Promise((resolve,reject)=>{
        Transactions.find({},(err,docs)=>{
            if(err) reject({
                success: false,
                error: err
            });
            resolve(docs)
        })
    })
        .then(res=> res)
        .catch(err=> err)
}

const create = (data) => {
    return new Promise((resolve,reject)=>{
        let { text, amount } = data;

        Transactions.create({text: text, amount: amount, createdAt: Date.now()},(err, doc)=>{
            if(err) reject({
                success:false,
                error:err
            });
            resolve(doc);
        })
    })
        .then(res => res)
        .catch(err=> err)
}

const deletes = (params) => {
    return new Promise((resolve, reject)=>{
        let { id } = params;

        Transactions.deleteOne({_id: id},(err,doc)=>{
            if(err)reject({
                success: false,
                error: 'No transaction found'
            })
            resolve(doc)
        })
    })
        .then(res=> res)
        .catch(err=> err)
}

module.exports = {
    find,
    create,
    deletes
}