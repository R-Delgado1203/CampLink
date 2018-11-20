var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "signup.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "profile.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  
};
