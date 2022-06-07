const express = require("express");
const https = require("https");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  const query = req.body.cityName;
  const apiKey="8a03d6403a4ba7af739de29e9007b79e";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey;
  https.get(url, function(response){
    // console.log(response);
    response.on("data", function(data){
      const weatherData=JSON.parse(data);
      console.log(weatherData.weather[0].description);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const imageURL = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
      res.write("<p>The weather is currently "+description+".</p>");
      res.write("<h1>The Temperature in "+query+" is "+temp+" degress Celsius.</h1>");
      res.write("<img src="+imageURL+">");
      res.send();
    });
  });
});










app.listen(3000, function(){
  console.log("Server is running on port 3000.")
})
