const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const city = process.argv[2];

if (!city) {
  console.log('Please provide an address');
} else {
  geoCode(city, (error, data) => {
    if (error) {
      return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}