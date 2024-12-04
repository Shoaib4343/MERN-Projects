const express = require("express")
const { register, login,test } = require("../controllers/auth.controller")
const { signInRequire,isAdmin } = require("../middlewares/auth.middleware")


// router object
const router = express.Router()

// register rout || method post
router.post("/register",register)
router.post("/login",login)

router.get("/test",signInRequire,isAdmin, test)

module.exports = router