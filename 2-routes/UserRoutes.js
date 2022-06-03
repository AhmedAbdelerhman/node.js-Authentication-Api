
const express = require('express')

const userController = require('../1-controllers/userController')

const isAuth = require("../isAuth/isAuth")


const router =  express.Router()

router.get("/",isAuth,userController.getAllUsers)

router.post("/signup",userController.registerUser)
router.post("/login",userController.postLogin)




module.exports = router;