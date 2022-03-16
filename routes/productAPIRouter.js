'use strict'

const express = require('express');
const productAPIRouter = express.Router();

const productController = require('../controller/productController');

productAPIRouter.get('/list', async (req, res) => {
    const products = await productController.getProducts(req, res);
    res.json(products);
});

module.exports = productAPIRouter;