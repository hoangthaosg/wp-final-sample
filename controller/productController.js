'use strict'

const productDAO = require('../db/dao/productDAO');
const Product = require('../model/product');

const productController = (function(){

    const getProducts = async function(req, res) {
        try {
            const products = await productDAO.getProducts();
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    };

    const addNewProduct = async function(req, res) {
        const product = new Product(null, parseInt(req.body.productNo), req.body.productName, parseFloat(req.body.unitPrice));
        try {
            const opRes = await productDAO.saveProduct(product);
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    }

    const getHotDealProducts = async function(req, res) {
        try {
            const products = await productDAO.getHotDealProducts();
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x", {error: error});
        }
    };

    return {
        getProducts, addNewProduct, getHotDealProducts
    }
})();

module.exports = productController;