const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req,res) {
  const query = req.body.cityName
  const apiKey = "19e7e441ad6259b3324fb66bbb61fd3c&units=metric"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey + "&" + unit;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const cityName = weatherData.name;
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;

      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p> The weather description: " + weatherDescription + "</p>")
      res.write("<h1>Temperature in " + cityName + " is " + temp + "<h1>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    })

  })
})

/*




*/



app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
