require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const ejs = require('ejs');
const subscribers = require('./public/js/subscribers.js');
const articles = require('./public/js/articles.js');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('index');
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
});

app.get('/subscribers', (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('subscribers.ejs', {
            subscribers,
        });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
});

app.get('/articles', (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('articles.ejs', {
            articles,
        });
    } catch (error) {
        res.statusCode = 500;
        return res.render('404.ejs');
    }
});
