const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
// const validation = require("../validations/validation")

//handler for create author
const createUser = async function (req, res) {
    try {
        let data = req.body;

        let { firstName, lastName, email, password, phone, dob, gender } = data;

        //body validation

        if (!firstName || !lastName || !email || !password || !phone || !dob || !gender) {
            return res.status(400).send({ status: false, Error: "user's all data is mandatory" })
        }

        // // email syntax validation
        // if (!validation.isValidEmail(email)) {
        //     return res.status(400).send({ status: false, Error: "INVALID EMAIL - Email should be in this format (abc@egf.com)" })
        // }

        //email validation
        const findEmail = await userModel.findOne({ email: email })
        if (findEmail) {
            return res.status(400).send({ status: false, Error: "Email already exist" })
        }

        // //name validation
        // if (!validation.validateName(name)) {
        //     return res.status(400).send({ status: false, Error: "INVALID Name - name should contain alphabets only and no space. " })
        // }

        // //password validation
        // if (!validation.checkPassword(password)) {
        //     return res.status(400).send({ status: false, Error: "Required minimum 8 characters with combination of at least one special character(@,$,&,/,*), upper and lower case letters and a number" })
        // }

        // hashing the password
        data.password = await bcrypt.hash(password, 10);

        // making email to lowercase
        data.email = email.toLowerCase()


        let createdUser = await userModel.create(data)
        res.status(201).send({ status: true, msg: createdUser })
    }
    catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}

const login = async function (req, res) {
    try {
        let data = req.body;
        const { email, password } = data;
        if (!email || !password) {
            return res.status(400).send({ status: false, Error: "Email and Password are required" })
        }

        //making email to lower case
        const updatedEmail = email.toLowerCase()

        let user = await userModel.findOne({ email: updatedEmail})
        if (!user) {
            return res.status(400).send({ status: false, Error: "Email  is incorrect" })
        }
        
        let bcryptedPass = await bcrypt.compare(password, user.password);
        if(!bcryptedPass){
            return res.status(400).send({status : false, message : "password is invalid"})
        }
        console.log(bcryptedPass);

        let token = jwt.sign({ user: user._id }, "taskManageSecretKey", {expiresIn : "10h"})
        return res.status(200).send({ status: true, msg: token });
    }
    catch (err) {
        res.status(500).send({ status: false, Error: err.message })
    }
}



module.exports.createUser = createUser;
module.exports.login = login;