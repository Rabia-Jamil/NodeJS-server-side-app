const express = require('express')

const app = express()

const path = require('path')

console.log(__dirname)
console.log(__filename)

const newPathToPublicFolder = path.join(__dirname, '../public/')
console.log(newPathToPublicFolder)

app.use(express.static(newPathToPublicFolder))

app.get('', (req, res) => {
    res.send("<h1>Main Page</h1>")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/helloworld', (req, res) => {
    res.send({
        name: "Rabia",
        city: "Karachi",
    })
})

app.get('/contact', (req, res) => {
    res.send("Contact Page")
})

app.get('*', (req, res) => {
    res.send("Page not found")
})

app.listen(3000, () => {
    console.log("Listening to port 3000 successfully!!!")
})

