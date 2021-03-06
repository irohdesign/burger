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
    this.create = function(req, res) {
        const sql = `INSERT INTO ?? (burger_name) VALUES ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, [table, ], function(err, data) {
                if(err) reject(err);
                resolve(data);
            });
        })
    },

    // updateOne
    this.updateOne = function(req, res) {
        const sql = `UPDATE burgers SET devoured = true WHERE id = ?`;

        return new Promise(function(resolve, reject) {
            connection.query(sql, res.id, function(err,data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = ORM;