require('dotenv').config();

const environment = {
    port: process.env.PORT || 5000,
    user: process.env.DB_USER || 'bsale_test',
    password: process.env.PASSWORD || 'bsale_test',
    host: process.env.HOSTING || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dataBase: process.env.DATA_BASE || 'bsale_test',
}

module.exports = environment;