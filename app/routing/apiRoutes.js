var path = require('path');

module.exports = function(web) {
//Routes
//=============================================
app.get("/data/friends", function(req, res) {
  res.json(friends);
});

app.post("/data/friends", function(req, res) {
  var friends = req.body;
  friends.routeName = friends.name.replace(/\s+/g, "").toLowerCase();

  console.log(friends);

  characters.push(friends);

  res.json(friends);
});
};