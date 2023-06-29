const express = require('express')
const app = express()

const counterData = {
    counter: 0
}

app.get('/', (req, res) => {
    res.send(counterData)
})

app.get('/increment', (req, res) => {
    counterData.counter++
    res.send(counterData)
})

app.get('/decrement', (req, res) => {
    counterData.counter--
    if(counterData.counter <= 0) {
        counterData.counter = 0
    }
    res.send(counterData)
})

app.listen(80, () => {
    console.log('server running on port 80');
})
