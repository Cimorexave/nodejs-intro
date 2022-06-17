console.log('*** started app.js ***')
//const homePage = require("./public/index.html")
//import * as homePage from './public/index.html';
const express = require("express")
const app = express()

app.listen('5000', () => {
    console.log('server listeing on port 5000...')
})


app.get('/', (req, res) => {
    console.log('home page')
    res.status(200).send("./public/index.html")
    res.sendFile("./public/style.css")
}) 
app.get('/about', (req, res) => {
    res.status(200).send("<h1>About Page</h1>")
})