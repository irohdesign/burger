const express = require("express");
const burger = require("../models/burger.js");

// routes
module.exports = function(app) {
    // show all burgers - app.get
    app.get("/", function(req, res) {
        burger.selectAll()
        .then(function(data) {
            console.log(data);
        })
    })
    
    // create new burger - app.post


    // update devour - app.put
}