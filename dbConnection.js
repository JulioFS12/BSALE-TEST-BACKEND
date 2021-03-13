const mysql = require('mysql');
const { host, user, password, dataBase } = require('./config');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host: host,
    user: user,
    password: password,
    database: dataBase,
});
  
module.exports = pool;