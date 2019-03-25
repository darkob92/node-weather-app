const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const city = process.argv[2];

if (!city) {
  console.log('Please provide an address');
} else {
  geoCode(city, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error)
    }
    
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}