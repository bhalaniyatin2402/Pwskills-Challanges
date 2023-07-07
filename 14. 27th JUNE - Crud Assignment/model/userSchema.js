const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const registerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim:  true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'user already exists on this email']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
},{
    timeStamps: true
})

registerSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

module.exports = mongoose.model('Register', registerSchema)
