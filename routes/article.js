const express = require('express'); 
const { 
    create, 
    getAll, 
    getSingle 
} = require('../controller/articleController')
const route = express.Router(); 


route.get('/', getAll)

route.get('/:id', getSingle)

route.post('/', create)

// route.patch('/article/:id', (req, res) => {
//     ...
// })

// route.delete('/article/:id', (req, res) => {
//     ...
// })

module.exports = route; 