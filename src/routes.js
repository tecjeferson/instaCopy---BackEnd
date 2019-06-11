const express = require('express')

const routes = new express.Router()

//add router to access the page
routes.get('/', (req, res) => {
    return res.send('Olá')
})

module.exports = routes