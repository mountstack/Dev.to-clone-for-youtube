
const articles = [
    {
        id: 1, 
        title: 'This is article 1', 
        body: 'I am Rijwan Hossain'
    }, 
    {
        id: 2, 
        title: 'Youtube Videos', 
        body: 'I am creating a youtube course on backend development'
    }
]

const getSingle = (req, res) => {
    const id = req.params.id; 
    let data; 
    for(let i = 0; i < articles.length; i++) {
        if(id == articles[i].id) {
            data = articles[i]
            break; 
        }
    }

    res.json({
        data
    })
}

const getAll = (req, res) => {
    res.json({
        data: articles
    })
}

const create = (req, res) => {
    articles.push(req.body); 
    res.json({
        message: 'Article created successfully'
    })
}

module.exports = {
    create, 
    getAll, 
    getSingle
}