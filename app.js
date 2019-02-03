// Init Weather Class
const weather = new Weather('Vilnius', 'LT');
const ui = new UI();
// Get weather on DOM load

const getWeather = () => {
  weather
    .getWeather()
    .then(result => {
      ui.paint(result);
    })
    .catch(error => {
      console.log(error);
    });
};

document.addEventListener('DOMContentLoaded', getWeather);
