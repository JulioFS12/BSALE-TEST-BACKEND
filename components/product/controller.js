const { response } = require("express");
const pool = require('../../dbConnection')

const getAllProducts = (req, res = response) => {

    pool.query('SELECT * FROM product', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
    });

}

module.exports = {

    getAllProducts,

}