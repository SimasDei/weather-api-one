class Storage {
  constructor() {
    this.city;
    this.region;

    // Default Location State
    this.defaultCity = 'Vilnius';
    this.defaultRegion = 'LT';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('region') === null) {
      this.region = this.defaultRegion;
    } else {
      this.region = localStorage.getItem('region');
    }

    return {
      city: this.city,
      region: this.region
    };
  }

  setLocationData(city, region) {
    localStorage.setItem('city', city);
    localStorage.setItem('region', region);
  }
}
