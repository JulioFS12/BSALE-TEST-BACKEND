require('dotenv').config();

const environment = {
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOSTING,
    dataBase: process.env.DATA_BASE,
}

module.exports = environment;