const express = require("express")
const { register } = require("../controllers/auth.controller")

// router object
const router = express.Router()

// register rout || method post
router.post("/register",register)

module.exports = router