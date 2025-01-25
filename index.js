const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
let port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('pages/home');
})

app.get('/score', (req, res) => {
    res.render('pages/score');
})

app.get('/counter', (req, res) => {
    res.render('pages/counter');
})


app.get('*', (req, res) => {
    res.send(`Not found`);
})

app.listen(port, () => {
})