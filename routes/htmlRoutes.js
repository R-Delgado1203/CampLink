var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/signup", function(req, res) {
    res.render(path.join(__dirname, "../views/signup.handlebars"));
  });

  app.get("/profile/:username", function(req, res) {
    db.user.findAll({
      where: {
        username: req.params.username
      }
    })
      .then(function (data) {
        var userData = {
          users: data
        }
        res.render('profile', userData);
      });
  });

  //page to display all profiles
  app.get("/directory", function (req, res) {
    db.user.findAll({})
      .then(function (data) {
        var userData = {
          users: data
        }
        res.render('directory', userData);
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  
};
