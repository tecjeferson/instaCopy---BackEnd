const express = require('express')
const mongoose = require('mongoose')

const app = express()

//connection with database
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jgadg.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
})

//it makes recognize the routes by 'routes.js' 
app.use(require('./routes'))

app.listen(3000)