const mongoose = require('mongoose')

const todoData = new mongoose.mongoose.Schema({
    task: String,
    status: {type:Boolean,default:false}
});

module.exports = mongoose.model('Todo', todoData);