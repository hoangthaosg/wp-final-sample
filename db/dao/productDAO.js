'use strict'

const dbConnectionMgr = require('../dbConnectionMgr');

const productDAO = (function() {

    const getProducts = async function() {
        const qryStrGetProducts = "SELECT * FROM products";
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [products] = await dbConnection.promise().query(qryStrGetProducts);
            return products;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    const saveProduct = async function(product) {
        const cmdStrSaveProduct = `insert into products values (null, ${product.productNo}, '${product.productName}', ${product.unitPrice})`;
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveProduct);
            return saveOpResult;
        } catch(error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    const getHotDealProducts = async function() {
        const qryStrGetProducts = "SELECT * FROM products where unit_price > 2.0";
        try {
            const dbConnection = dbConnectionMgr.getConnection();
            const [products] = await dbConnection.promise().query(qryStrGetProducts);
            return products;
        } catch (error) {
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    return {
        getProducts,
        saveProduct,
        getHotDealProducts
    }
})();

module.exports = productDAO;