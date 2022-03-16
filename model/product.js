'use strict'

class Product {
    constructor(productId, productNo, productName, unitPrice) {
        this.productId = productId;
        this.productNo = productNo;
        this.productName = productName;
        this.unitPrice = unitPrice;
    }
}

module.exports = Product;