const mongoose = require('mongoose');


const User = mongoose.model('User', {
    username: String,
    passwordHash: String,
    credential: String
});

module.exports = User;