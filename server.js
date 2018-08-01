const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/sharks", function(req, res) {
  console.log('hit /api/sharks');
  res.json([
    {type: "mako", speed: 45, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Isurus_oxyrinchus_by_mark_conlin2.JPG/1024px-Isurus_oxyrinchus_by_mark_conlin2.JPG"}, 
    {type: "great white", speed: 35, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/1024px-White_shark.jpg"}
  ]);
  res.end();
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  console.log('fallback react path hit');
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
