'use strict'

const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', require('./routes/homeRouter'));
app.use('/product', require('./routes/productRouter'));
app.use('/api/products', require('./routes/productAPIRouter'));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = 3000;

app.listen(port, () => {
    console.log('Your Server is running on 3000');
})