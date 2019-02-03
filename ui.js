class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-description');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-expanded-desc');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.visibility = document.getElementById('w-visibility');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    console.log(weather);
    this.string.style = 'display: inline-block;';
    weather.weather.map(data => {
      this.details.textContent = data.description;
      this.icon.src = `http://openweathermap.org/img/w/${data.icon}.png

      `;
      this.desc.textContent = data.main;
    });

    this.location.textContent = weather.name;
    this.string.textContent = weather.main.temp;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.visibility.textContent = `Visibility: 
    ${weather.visibility / 1000} km`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind: ${Math.round(
      weather.wind.deg,
      2
    )}\u00B0 Speed: ${weather.wind.speed}m/s`;
  }
}
