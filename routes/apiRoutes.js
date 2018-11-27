var db = require("../models");

module.exports = function (app) {
  // find all users
  app.get("/api/search/users", function (req, res) {
    db.user.findAll({})
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  //search via first name
  app.get("/api/search/users/first_name/:firstName", function (req, res) {
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
  app.get("/api/search/users/last_name/:lastName", function (req, res) {
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
  app.get("/api/search/users/year/:year", function (req, res) {
    db.user.findAll({
      where: {
        year: req.params.year
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.get("/api/search/users/:language", function (req, res) {
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
