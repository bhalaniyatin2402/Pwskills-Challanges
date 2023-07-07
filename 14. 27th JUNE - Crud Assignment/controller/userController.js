const Register = require('../model/userSchema')
const bcrypt = require('bcrypt')

exports.userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password) {
            throw new Error('all fields are required')
        }

        const user = await Register.findOne({ email })
        if(user) {
            throw new Error('user already exist on this email address')
        }
        
        const userRegister = new Register(req.body)
        const result = await userRegister.save()
        res.status(200).json({
            success: true,
            msg: 'User Registered Successfuly',
            user: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: error.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        
        if(!email || !password) {
            throw new Error('please enter email and password')
        }

        const useDetails = await Register.findOne({ email })
        const isMatch = await bcrypt.compare(password, useDetails.password)

        if(!isMatch) {
            throw new Error('invalid email or password')
        }
        res.status(200).json({
            success: true,
            msg: 'User Login Successfully'
        })    

    } catch (error) {
        res.status(400).json({
            success: false,
            msg: error.message
        })    
    }
}