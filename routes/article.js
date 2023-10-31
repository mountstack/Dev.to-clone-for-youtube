const express = require('express'); 
const { 
    create, 
    getAll, 
    getSingle, 
    update, 
    deleteArticle
} = require('../controller/articleController')
const route = express.Router(); 


route.post('/', create);
route.get('/', getAll);
route.get('/:id', getSingle);
route.patch('/:id', update);
route.delete('/:id', deleteArticle);

// route.patch('/article/:id', (req, res) => {
//     ...
// })

// route.delete('/article/:id', (req, res) => {
//     ...
// })

module.exports = route; 