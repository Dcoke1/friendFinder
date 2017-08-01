//Routes
//=============================================
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
  var friends = req.body;
  friends.routeName = friends.name.replace(/\s+/g, "").toLowerCase();

  console.log(friends);

  characters.push(friends);

  res.json(friends);
});