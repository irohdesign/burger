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
        
        console.log(req.body.burger_name)
        // .then(function(data){
        //     console.log(data);
        // }).catch(function(err){
        //     console.log(err);
        // });
    });

    // update devour - app.put
    app.put("api/burgers/:id", function(req, res) {
        var devoured = false;

        burger.updateOne(devoured, req.params.id)
        .then(function(data) {
            if(data.changedRows == 0) {
                return res.status(404).end();
            } else {
                return res.status(200).end();
            }})
            .catch(function(err) {
                console.log(err);
            });
        });
}