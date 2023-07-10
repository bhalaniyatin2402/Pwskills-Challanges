require('dotenv').config()
const express = require('express')
const cors = require('cors')
const hbs = require('hbs')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = process.env.PORT || 80

// require config for database connection
require('./config/dbConfing')

// use template engine - hbs and partial
app.set('view engine', 'hbs')
app.set('views', './template/views')
hbs.registerPartials('./template/partials')

app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

// require routes
const userRoute = require('./routes/userRoute')

// set route for end points
app.use('/', userRoute)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})