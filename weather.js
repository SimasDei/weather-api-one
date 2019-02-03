class Weather {
  constructor(city, region) {
    this.api_key = '41168657153f27fbe71407618d66ef4f';
    this.city = city;
    this.region = region;
  }

  // Fetch Weather data from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.region
      }&units=metric&APPID=${this.api_key}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change Report Location
  changeLocation(city, region) {
    this.city = city;
    this.region = region;
  }
}
