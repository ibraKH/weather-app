const jwt = require("jsonwebtoken");
const request = require('request');

const dotenv = require('dotenv').config()

exports.weather = (req, res) => {
    const { city } = req.body;
        request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_key}`, function (err, response, body) {
            if(err){
                console.log(err);
            }
            let data = JSON.parse(body);
            console.log(data);
            if(data.cod !== '404'){
                res.render("weather", {
                    tempC: `${data.main.temp}`,
                    tempM: `${data.weather[0].main}`,
                    cityA: `${city}`
                })
            }else{
                res.render("weather")
            }
            
});
}
