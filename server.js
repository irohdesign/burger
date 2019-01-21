// dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/orm");
const burger = require("./models/burger.js");

// express app
const app = express();

// port
const PORT = process.env.PORT || 8080;

// static content
app.use(express.static("public"));

// parse application body
app.use(express.urlencoded({extended: true}));
app.use(express.json);

// setup handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import route
require("./controllers/burgers-controller.js")(app);

// start server
app.listen(PORT, function() {
    console.log("server listening on http://localhost: at " + PORT);
})

console.log(
        burger.selectAll()
        .then(function(data) {
            console.log({burgers: data});
        }).catch(function(err) {
            console.log(err);
        })
)