const { createUser, loginUser } = require("../controllers/userController");

const express = require("express")
const router = express.Router();


router.post("/createUser",createUser)
router.post("/loginUser",loginUser)

module.exports = router 
