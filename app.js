// Init  Classes
const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.region);
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

// Change Location Handler
document.getElementById('w-change').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const region = document.getElementById('region').value;

  weather.changeLocation(city, region);

  storage.setLocationData(city, region);

  // Get and Display weather
  getWeather();

  // Close the Modal
  $('#locationModal').modal('hide');
});
