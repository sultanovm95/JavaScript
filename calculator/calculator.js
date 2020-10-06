const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  // if localhost, you can use index.html
});

app.post("/", function(req,res) {

  var num1 = Number(req.body.number1);
  var num2 = Number(req.body.number2);

  var result = num1 + num2;

  res.send("The result of Calculation is: " + result);
});

app.listen(3000, function() {
  console.log("Server started on port: 3000");
});