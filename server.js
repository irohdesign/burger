// dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// express app
const app = express();

// port
const PORT = process.env.PORT || 8080;

// static content
app.use(express.static("public"));