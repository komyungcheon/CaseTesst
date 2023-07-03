const mysql = require('mysql');

class DatabaseModel {
    constructor() {
        this.host = 'localhost';
        this.user = 'root';
        this.password = '123456';
        this.database = 'football_db';
    }

    connect() {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })
    }
}

module.exports = new DatabaseModel();



// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'football_db',
//     charset: 'utf8_general_ci'
// });
//
// connection.connect(function (err) {
//     if (err) {
//         throw err.stack;
//     }
//     else {
//         console.log("Kết nối với db thành công");
//     }
// });
//
// const sqlSelect = 'SELECT * FROM players';
// connection.query(sqlSelect, (err, results, fields) => {
//     if (err) throw err;
//     console.log(results, "Select");
// });