const { response } = require("express");
const pool = require('../../dbConnection');

const getAllProducts = (req, res = response) => {

    const limit = req.query.limit;
    const set = req.query.set;

    pool.query(`SELECT name, url_image, price FROM product LIMIT ${limit} OFFSET ${set}`, function (error, results, fields) {
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

const getProductByName = (req, res = response) => {

    const name = req.query.name;
    console.log(name);

    pool.query(`SELECT name, url_image, price FROM product WHERE name LIKE '%${name}%'`,function (error, results, fields) {

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

const getProductByCategory = (req, res = response) => {

    const idCategory = req.query.idCategory;
    const name = req.query.name;

    pool.query(`SELECT p.name, p.url_image, p.price FROM product AS p INNER JOIN category AS c ON p.category = c.id WHERE p.category = ${idCategory} AND p.name LIKE '%${name}%'`, function (error, results, fields) {

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

    getAllProducts,
    getProductByCategory,
    getProductByName
}