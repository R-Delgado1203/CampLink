var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/signup", function(req, res) {
    res.render(path.join(__dirname, "../views/signup.handlebars"));
  });

  app.get("/profile", function(req, res) {
    res.render(path.join(__dirname, "../views/profile.handlebars"));
  });

  //page to display all profiles
  app.get("/cohort", function (req, res) {
    db.user.findAll({})
      .then(function (data) {
        var userData = {
          users: data
        }
        res.render('cohort', userData);
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  
};
