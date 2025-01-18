const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/score', (req, res) => {
    res.render('score');
})

app.get('/counter', (req, res) => {
    res.render('counter');
})


app.get('*', (req, res) => {
    res.send(`Not found`);
})

app.listen(port, () => {
})