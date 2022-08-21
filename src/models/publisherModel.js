const mongoose = require('mongoose')

const publisherschema= new mongoose.Schema({
    name: String,
    headQuater: String 

},{timestamps:true})

module.exports= mongoose.model('newPublisher', publisherschema)