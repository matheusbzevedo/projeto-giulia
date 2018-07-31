const mysql = require('mysql');
const Promise = require('bluebird');

Promise.promisifyAll(mysql);
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

// const pool = mysql.createPool({
//     host: process.env.SQL_HOST,
//     user: process.env.SQL_USER,
//     password: process.env.SQL_PASSWORD,
//     database: process.env.SQL_DATABASE,
//     port: process.env.SQL_PORT
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'giulia',
    port: 3306
});

function getSqlConnection() {
    return pool.getConnectionAsync().disposer((connection) => {
        console.log('Releasing connection back to pool.');
        connection.release();
    });
}

function querySql(query, params) {
    return Promise.using(getSqlConnection(), (connection) => {
        console.log('Got connection from pool.');
        if (typeof params !== 'undefined')
            return connection.queryAsync(query, params);
        else
            return connection.queryAsync(query);
    });
}

module.exports = {
    getSqlConnection: getSqlConnection,
    querySql: querySql
};