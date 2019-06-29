const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 3333

const server = require('http').Server(app)
const io = require('socket.io')(server)

//connection with database
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jgadg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use((req, res, next) => {
    req.io = io
    next()
})

//it makes recognize the routes by 'routes.js'
app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))

app.listen(port, err => {
    if (err) {
        console.log('The server could nor starts')
    } else {
        console.log('Server running in port 3333')
    }
})