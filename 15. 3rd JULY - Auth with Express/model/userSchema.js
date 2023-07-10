const mongoose = require('mongoose')
const bcryt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'username must be required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email s required'],
        unique: [true, 'user already register on this email']
    },
    password:  {
        type: String,
        required: [true, 'password is required']
    },
    bio: {
        type: String,
        minLength: 10,
        maxLength: 50
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.createAuthToken = async function() {
    const token = await JWT.sign({ _id: this._id.toString() }, process.env.SECRET_KEY )
    this.tokens = this.tokens.concat({ token })
    await this.save()

    return token
}

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcryt.hash(this.password, 10)
    }
})

module.exports = mongoose.model('User', userSchema)