const connection = require("./connection.js");

function ORM(table) {
    this.table = table;

    // select all
    this.selectAll = function() {
        const sql = `SELECT * FROM ??`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, table, function(err, data) {
                if(err) reject(err);
                resolve(data);
            });
        })
    },

    // insertOne
    this.insertOne = function() {
        const sql = `INSERT INTO burgers (burger_name) VALUES ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, burger_name, function(err, data) {
                if(err) reject(err);
                console.log(data);
            });
        })
    },

    // updateOne
    this.updateOne = function() {
        const sql = `UPDATE burgers SET devoured = true WHERE id = ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, id, function(err,data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = ORM;