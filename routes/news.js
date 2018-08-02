const Article = require("../models/Article");

module.exports = function(app) {

// Route to get all saved articles
app.get("/api/saved", function(req, res) {
    Article.find({})
      .exec(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
  });
  
  // Route to add an article to saved list
  app.post("/api/saved", function(req, res) {
    let newArticle = new Article(req.body);
    console.log(req.body);
    newArticle.save(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });
  
  // Route to delete an article from saved list
  app.delete("/api/saved/", function(req, res) {
    let url = req.param("url");
    Article.find({ url: url }).remove().exec(function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Deleted");
      }
    });
  });

}