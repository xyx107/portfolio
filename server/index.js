const express = require('express')

const app = express()

app.use('/static', express.static('server/public'))

app.use(require('cors')())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const Article = mongoose.model('Article')

app.get('/', async (req,res) => {
    res.send({ page: 'index'})
})

app.get('/about', async (req,res) => {
    res.send({ page: 'about'})
})

app.get('/product', async (req,res) => {
    res.send([
        { id: 1, title: "a" },
        { id: 2, title: "b" },
    ])
})
app.listen(3001, () => {
    console.log("https://localhost:3001/")
})