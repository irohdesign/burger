const burger = require("../models/burger.js");

// routes
module.exports = function(app) {
    // show all burgers - app.get
    app.get("/", function(req, res) {
        burger.selectAll()
        .then(function(data) {
            res.render("index", {burgers: data});
        }).catch(function(err) {
            console.log(err);
        });
    });
    
    // create new burger - app.post
    app.post("/api/burgers", function(req, res) {
        burger.insertOne(req.body.burger_name, req.body.devoured)
        .then(function(data){
            res.json({id: data.insertId});
        }).catch(function(err){
            console.log(err);
        });
    });


    // update devour - app.put
}