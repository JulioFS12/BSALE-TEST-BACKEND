const mysql = require('mysql');
const { host, user, password, dataBase } = require('./config');

console.log(host, user, password, dataBase )


const pool  = mysql.createPool({
    connectionLimit : 10,
    host: host,
    user: user,
    password: password,
    database: dataBase,
});
  
module.exports = pool;