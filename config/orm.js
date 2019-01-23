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

    // create burger
    this.create = function() {
        const sql = `INSERT INTO ?? (burger_name) VALUES ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, [table, "burger_name"], function(err, data) {
                if(err) reject(err);
                console.log("added a burger?");
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