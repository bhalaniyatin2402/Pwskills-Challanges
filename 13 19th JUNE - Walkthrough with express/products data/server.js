const http = require('http')
const fs = require('fs')

const menProducts = fs.readFileSync('./menProducts.json', 'utf-8')  
const womenProducts = fs.readFileSync('./womenProducts.json', 'utf-8')  

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('Welcome to Man and Women Dummy Data')
    } else if (req.url === '/men') {
        res.writeHead(200, {'Content-Type': 'application.json'})
        res.end(menProducts)
    } else if (req.url === '/women') {
        res.writeHead(200, {'Content-Type': 'application.json'})
        res.end(womenProducts)
    } else if (req.url === '/other') {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('page not found')      
    }
})

server.listen(80, '127.0.0.1', () => {
    console.log('listening port on 80');
})
