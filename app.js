// Init Weather Class
const weather = new Weather('Vilnius', 'Lt');

// Get weather on DOM load

const getWeather = () => {
  weather
    .getWeather()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};

document.addEventListener('DOMContentLoaded', getWeather);
