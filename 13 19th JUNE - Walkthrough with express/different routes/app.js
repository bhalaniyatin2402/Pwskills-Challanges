const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ msg: `i am homepage` })
})

app.get('/about', (req, res) => {
    res.json({ msg: `i am about page` })
})

app.get('/contact', (req, res) => {
    res.json({ email: `support@pwskills.com` })
})

app.listen(80, () => {
    console.log('server is running on port 88');
})
