const express = require('express'); 
const mongoose = require('mongoose'); 
const articleRouter = require('./routes/article'); 

const app = express(); 
app.use(express.json()); 


app.use('/article', articleRouter); 
// app.use('/payment', paymentRouter)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Backend Development Course'
    })
})

app.listen(6000, () => {
    console.log('App is running on port 6000');
    
    mongoose.connect( 
        'mongodb://localhost:27017/devtoclone', 
        {  useNewUrlParser: true } 
    ) 
        .then((data) => {
            console.log('DB Connected...');
        }) 
        .catch((err) => {
            console.log('Error: ' + err);
        })
}) 


// https://google.com/product
