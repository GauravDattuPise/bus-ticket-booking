const mongoose = require("mongoose")
// const signUpData = {firstName,lastName,email,password,phone,gender,dob}

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["Male","Female","Other"]
    },
    dob : {
        type : Date,
        required : true
    }
    
},

    { timestamps: true }
)

module.exports = mongoose.model('user', userSchema)