const express = require('express')
const app = express()

app.get('/random', (req, res) => {
    res.json({ random: Math.round(Math.random() * 100) })
})

app.listen(80, () => {
    console.log('server running on port 80');
})
