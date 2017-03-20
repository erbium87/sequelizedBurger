var express = require("express");
// var app = express();

// var router = express.Router();

var db = require("../models");

module.exports = function (app) {
app.get("/", function(req, res) {
  db.Burgers.findAll({
  }).then(function(dbBurger) {
    res.render("index", {
      Burgers: dbBurger
      // burger_name: req.body.burger_name,
      // devoured: req.body.devoured
    });
    // res.json(dbBurger);
  });
});

app.post("/", function(req, res) {
  db.Burgers.create({
    burger_name: req.body.burger_name,
    // devoured: req.body.devoured
  }).then(function(dbBurger) {
    // res.render("index", dbBurger);
    res.redirect("/");
  }); 
});

app.put("/:id", function(req, res) {
 db.Burgers.update({
      // burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      // res.render("index", dbBurger);
      res.redirect("/");
    });
});
};

// module.exports = app;
