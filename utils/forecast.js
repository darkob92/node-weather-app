const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    `https://api.darksky.net/forecast/97e56c6aa2787ebdd28673ed0c7941bc/${lat},${long}?units=si`;

    request({ url: url, json: true}, (error, response) => {

      if(error) {
        callback("Unable to connect to weather service!", undefined);
      } else if (response.body.error) {
        callback("Unable to find location", undefined);
      } else {
        callback(undefined, `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} celsius out. There is a ${response.body.currently.precipProbability}% chance of rain.`
        );
      }
    })
}

module.exports = forecast;