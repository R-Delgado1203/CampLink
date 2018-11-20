var db = require("../models");

module.exports = function (app) {
  // find all users
  app.get("/api/users", function (req, res) {
    db.user.findAll({})
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  //search via first name
  app.get("/api/search/user/:firstName", function (req, res) {
    db.user.findAll({
      where: {
        first_name: req.params.firstName
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  //search via last name
  app.get("/api/search/user/:lastName", function (req, res) {
    db.user.findAll({
      where: {
        last_name: req.params.lastName
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  //search via year
  app.get("/api/search/user/:year", function (req, res) {
    db.user.findAll({
      where: {
        bootcamp_year: req.params.year
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/search/user/:language", function (req, res) {
    db.profile_data.findAll({
      where: {
        favorite_language: req.params.language
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  //add new user
  app.post("/api/signup", function (req, res) {
    db.user.create(req.body)
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });
};
