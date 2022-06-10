//requirements
const http = require('node:http')

console.log('*** start ***')

const server = http.createServer((req, res)=> {
    res.end(
        '<h1> SSR attempt</h1>'
        )
})
server.listen(5000)