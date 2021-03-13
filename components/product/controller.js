const { response } = require("express");
const pool = require('../../dbConnection');

const getAllProducts = (req, res = response) => {

    pool.query('SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name AS category FROM product AS p INNER JOIN category AS c', function (error, results, fields) {
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

    pool.query('SELECT p.id, p.name, p.url_image, p.price, p.discount, c.name AS category FROM product AS p INNER JOIN category AS c ON p.category = c.id WHERE p.category = ?', idCategory, function (error, results, fields) {

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

    pool.query('SELECT * FROM product WHERE name LIKE ?', `%${name}%` , function (error, results, fields) {

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