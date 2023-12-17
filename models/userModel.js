const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username : {
            type: String,
            required: [true, "Please enter a username"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        },
        fullName: {
            type: String,
            required: [true, 'Please enter your full name']
        },
        telephone : {
            type: Number,
            required: [true, "Please enter elephone number"]
        },
        email: {
            type: String,
            required: [true, "Please enter an email"]
        }
    }, 
    {
        timestamps : true,
    }
);


const User = mongoose.model('User', userSchema);

module.exports = User;