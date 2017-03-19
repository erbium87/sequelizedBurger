var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.NODE_ENV || 8080;

var db = require("./models");



app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moreBurger_db"
});

// var routes = require("./controllers/burgers_controller.js");
require("./controllers/burgers_controller.js")(app);

// app.use("/", routes);

// app.listen(PORT);


db.sequelize.sync().then(function(){
	app.listen(PORT, function() {
		console.log("Listening on port %s", PORT);
	});
});
