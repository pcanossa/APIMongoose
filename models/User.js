const mongoose = require('mongoose');


const User = mongoose.model('User', {
    username: String,
    password: String,
    credential: String
});

module.exports = User;