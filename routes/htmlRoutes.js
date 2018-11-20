var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/signup", function(req, res) {
    res.render(path.join(__dirname, "../views/signup.handlebars"));
  });

  app.get("/profile", function(req, res) {
    res.render(path.join(__dirname, "../views/update-profile.handlebars"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  
};
