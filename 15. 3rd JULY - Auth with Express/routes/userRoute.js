const express = require('express')
const userRoute = express.Router()
const { home, about, signupPage, signup, loginPage, login, userPage, logout } = require('../controller/userController')
const { isoggedIn, signupDataValidate, loginDataValidate } = require('../middleware/auth')

userRoute.route('/').get(home)
userRoute.route('/about').get(isoggedIn, about)
userRoute.route('/signup').get(signupPage)
userRoute.route('/signup').post(signupDataValidate, signup)
userRoute.route('/login').get(loginPage)
userRoute.route('/login').post(loginDataValidate, login)
userRoute.route('/user').get(isoggedIn, userPage)
userRoute.route('/logout').get(isoggedIn, logout)

module.exports = userRoute
