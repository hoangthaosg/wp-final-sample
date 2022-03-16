'use strict'

const mysql = require('mysql2');
const dbConfig = require('./dbconfig');

const dbConectionMgr = (function(dbConfig) {

    const getConnection = function() {
        return mysql.createPool(dbConfig);
    }
    
    return {
        getConnection
    }
})(dbConfig);

module.exports = dbConectionMgr;