const mongoose = require('mongoose');

// Create your User Model
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true

});

module.exports = mongoose.model('User', userSchema);