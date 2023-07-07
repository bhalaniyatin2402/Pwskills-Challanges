require('dotenv').config()
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT
const app =  express()

require('./config/dbConfig')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const userRoutes = require('./routes/userRoute')
app.use('/', userRoutes)

app.listen(80, () => {
    console.log(`server is runing on port ${PORT}`);
})
