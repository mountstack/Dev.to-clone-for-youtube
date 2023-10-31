const Article = require('../model/Article'); 

const create = async (req, res) => {
    const { title, body, image, isPublished } = req.body; 
    try {
        const article = new Article({title, body, image, isPublished}); 
        await article.save(); 

        return res.status(201).json({
            message: 'Article created successfully'
        }) 
    } 
    catch (error) { 
        console.log('Error occured...');
    } 
} 

const getSingle = async (req, res) => {
    const id = req.params.id; 
    try {
        const article = await Article.findById(id); 
        res.json({
            article
        })
    } 
    catch (error) {
        
    }
}

const getAll = async (req, res) => {
    try {
        const result = await Article.find(); 
        res.status(200).json({ 
            total: result.length, 
            data: result
        })
    } 
    catch (error) {
        console.log(error)
    }
} 

const update = async (req, res) => { 
    const { title } = req.body; 
    const { id } = req.params; 
    try {
        const article = await Article.findByIdAndUpdate(id, {$set: {title}}, {new: true}); 
        res.status(200).json({ 
            message: 'Updated Successfully', 
            article 
        }) 
    } 
    catch (error) {
        console.log(error)
    }
} 


const deleteArticle = async (req, res) => { 
    const { id } = req.params; 
    try {
        await Article.findByIdAndDelete(id); 
        res.status(200).json({ 
            message: 'Deleted Successfully'
        }) 
    } 
    catch (error) {
        console.log(error)
    }
} 

module.exports = {
    create, 
    getAll, 
    getSingle, 
    update, 
    deleteArticle
}