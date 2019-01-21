const connection = require("./connection.js");

function ORM(table) {
    this.table = table;

    // select all
    this.selectAll = function() {
        const sql = `SELECT * FROM ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, table, function(err, data) {
                if(err) reject(err);
                resolve(data);
            });
        })
    },

    // insertOne
    this.insertOne = function(burger_name) {
        const sql = `INSERT INTO ?? (burger_name) VALUES ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, [table, burger_name], function(err, data) {
                if(err) reject(err);
                resolve(data);
            });
        })
    }

    // updateOne
}

module.exports = ORM;