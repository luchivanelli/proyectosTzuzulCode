const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: '127.0.0.1', //localhost
    port: 3306,
    user: 'luchi',
    password: '42869336',
    database: 'organizerapp'
})




module.exports = {
    connection: connection
}