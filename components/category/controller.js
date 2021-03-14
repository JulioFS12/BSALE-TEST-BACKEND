const { response } = require("express");
const pool = require('../../dbConnection');

const getAllCategories = (req, res = response) => {

    pool.query('SELECT * FROM category', (error, results, fields) => {
        
        if (error) {

            console.log(error);

            return res.status(400).send({
                ok: false,
                msg: 'Ups anything was wrong!',
            });
        }

        return res.status(200).send({
            ok: true,
            data: results,
            msg:'Request OK',
        });
    });

}

module.exports = {
    getAllCategories,
}