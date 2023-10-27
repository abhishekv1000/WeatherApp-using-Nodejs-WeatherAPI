const { log } = require('console');
const express = require('express')
var bodyParser = require('body-parser')
const ejs = require("ejs");
const https = require('https');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index", {site : "CITY" , tem : "TEMP" , discrp : "Enviorment"})
}) 

app.post("/" ,(req ,res )=>{
  console.log(req.body.box)

   const appid = "8e3abd7485e4d5afc62b907e560d6045"
    const city = req.body.box;
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+ appid + "&q=" + city +  "&units=" + unit

    https.get(url , function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weadata = JSON.parse(data)
            const temp = weadata.main?.temp;
            const weades = weadata.weather[0].description

            // const iconurl = "https://openweathermap.org/img/wn/"+ico +"@2x.png"
           
            // res.write("<img src="+ iconurl + ">")
            
            res.render("index", {site : city , tem : temp , discrp : weades})
        })  
    })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})