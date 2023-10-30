const express = require('express'); 
const articleRouter = require('./routes/article'); 

const app = express()
app.use(express.json())


app.use('/article', articleRouter)
// app.use('/payment', paymentRouter)

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Backend Development Course'
    })
})

app.listen(6000, () => {
    console.log('App is running on port 6000');
})