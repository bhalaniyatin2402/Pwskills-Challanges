const User = require('../model/userSchema')
const JWT = require('jsonwebtoken')

const isoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        const verifyUser = await JWT.verify(token, process.env.SECRET_KEY)

        req.user = await User.findOne({ _id: verifyUser._id })
        req.token = token
        next()
        
    } catch (error) {
        res.status(400).send(`please login before visit this page`)
    }
}

const signupDataValidate = async (req, res, next) => {
    try {
        const { name, username, email, password, bio } = req.body
    
        if(!name || !username || !email || !password || !bio) {
            throw new Error('all fieds are required to sign up')
        }
        next()
    } catch (error) {
        res.status(400).send(`error : ${error.message}`)
    }
}

const loginDataValidate = async (req, res, next) => {
    try {
        const { username, password } = req.body
    
        if(!username || !password) {
            throw new Error('username and password required to login')
        }
        next()
    } catch (error) {
        res.status(400).send(`error : ${error.message}`)
    }
}

module.exports = { isoggedIn, signupDataValidate, loginDataValidate } 