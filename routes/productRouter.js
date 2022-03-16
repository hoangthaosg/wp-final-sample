'use strict'

const express = require('express');
const path = require('path');
const productRouter = express.Router();

const productController = require('../controller/productController');

productRouter.get('/list', async (req, res, next) => {
    const products = await productController.getProducts(req, res);
    // res.locals = {products: products};
    res.render('product-list', {products});
});

productRouter.get('/new', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'product-form.html'));
});

productRouter.post('/new', async (req, res, next) => {
    await productController.addNewProduct(req, res);
    res.redirect(303, '/product/list');
});

productRouter.get('/hot', async (req, res, next) => {
    const products = await productController.getHotDealProducts(req, res);
    res.render('product-hot-deal', {products});
});

module.exports = productRouter;