const express = require ("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js");

const app = express()

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.use(express.static("public")); // file-path (css)
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req,res) {

  var day = date.getDay();

  res.render("list", {
    listTitle: day,
    newListItem: items
  });

});

app.post("/", function(req, res) {
  var item = req.body.newListItem;

  if(req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

  res.redirect("/");

})

app.get("/work", function(req, res) {
  day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItem: workItems
  });
});

app.get("/about", function(req,res) {
  res.render("about");
});

app.listen(3000,function() {
  console.log("Starting at port 3000")
});
