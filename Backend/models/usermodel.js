const mongoose = require('mongoose')

const userData = new mongoose.mongoose.Schema({
    userName: String,
    password: String
});

module.exports = mongoose.model('User', userData);