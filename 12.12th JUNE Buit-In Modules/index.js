const fs = require("fs");
const os = require('os')
const http = require('http')
const EventEmmiter = require('events')

const data = `Node.js is a platform that utilizes JavaScript and is primarily employed for developing 
web applications that are highly focused on input/output operations, including but not limited to chat
applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 
JavaScript engine. A web application is a type of software that executes on a server and is displayed 
by a client's browser that obtains all the application's resources over the internet.`;

// 2. create file and add data 
fs.writeFileSync('nodejs_architecture.txt', data)



// 3. read file
fs.readFile('nodejs_architecture.txt', 'utf-8', (err, data) => {
    console.log(data);
})

const addData = `Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking 
I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle 
multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly 
scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier`



// 4. append data to existing file
fs.appendFile('nodejs_architecture.txt', addData, (err) => {
    console.log(err);
    if(err) {
        console.log(err)
    } else {
        console.log('append successfully');
    }
})



// 5. delete file
fs.unlink('nodejs_architecture.txt', (err) => {
    console.log('delete file successfully');
})



// 6. operating system name & os release 
console.log('operating system : ' + os.type())
console.log('os release : ' + os.release())



// 7. creating server
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>`)
    }
    res.end()
})

server.listen(5000, '127.0.0.1', () => {
    console.log('the server is running on port 5000')
})



// 8/9. add event & call event before and after removing
const event = new EventEmmiter()

const subscribeMsg = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`)
}

event.addListener("subscribe", subscribeMsg)
// before removing the event
event.emit('subscribe', 'college Wallah')

// after removing the event
event.removeListener("subscribe", subscribeMsg)
event.emit('subscribe', 'college Wallah')



// 10. maximum number of event listner
console.log(`the default maximum event listner is ${event.getMaxListeners()}`)
event.setMaxListeners(5)
console.log(`the default maximum event listner is ${event.getMaxListeners()}`)


