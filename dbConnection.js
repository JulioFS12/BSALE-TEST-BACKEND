const mysql = require('mysql');
const { host, user, password, dataBase } = require('./config');

// Set database connection credentials
const config = {
    host: host,
    user: user,
    password: password,
    database: dataBase,
};
	
const pool = mysql.createPool(config);

module.exports = pool;