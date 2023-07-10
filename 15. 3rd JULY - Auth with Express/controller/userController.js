const User = require('../model/userSchema')
const bcrypt = require('bcryptjs')

exports.home = (req, res) => {
    res.render('index' , {
        message: 'HOME PAGE',
        isLoggedIn:  req.cookies.jwt
    })
}

exports.about = (req, res) => {
    res.render('index', {
        message: 'ABOUT PAGE',
        isLoggedIn:  req.cookies.jwt
    })
}

exports.signupPage = (req, res) => {
    res.render('signup', { isLoggedIn: req.cookies.jwt })
}

exports.signup = async (req, res) => {
    try {
        const { name, username, email, password, bio } = req.body

        const user = await User.findOne({ email, username })
        if(user) {
            throw new Error('user already exist on this username or email')
        }

        const newUser = new User( req.body )
        const result = await newUser.save()

        console.log(result);
        res.redirect('/login')
    } catch (error) {
        res.status(400).send(`ERROR : ${error}`)
    }
}

exports.loginPage = (req, res) => {
    res.render('login', { isLoggedIn: req.cookies.jwt })
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
    
        const user = await User.findOne({ username })
        if(!user) {
            return res.render('login', {
                message: 'Invalid username or password'
            })
        }
        
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.render('login', {
                message: 'Invalid username or password'
            })
        }

        const token = await user.createAuthToken()
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 1500000),
            httpOnly: true
        })
        res.redirect('/user')
    } catch (error) {
        res.status(400).send(`login error : ${error.message}`)
    }
}

exports.userPage = async (req, res) => {
    try {
        const { name, email, username, bio } = req.user
        res.status(200).render('user', { name, email, username, bio, isLoggedIn: req.cookies.jwt })
    } catch (error) {
        res.status(400).send('user page error :', error.message)
    }
}

exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter( currToken => currToken.token !== req.token )
        res.clearCookie('jwt')
        console.log('logout successfully');

        await req.user.save()
        res.redirect('/login')
    } catch (error) {
        res.status(400).send(`logout error : ${error.message}`)
    }
}
