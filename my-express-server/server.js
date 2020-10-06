// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello");
})

app.get("/contact", function(req,res) {
  res.send("Contant me at: 415 - 230 9343")
} )

app.get("/api", function(req,res) {
  res.send("Api Page is under construction, emergency call: 415 - 230 9343")
} )

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
