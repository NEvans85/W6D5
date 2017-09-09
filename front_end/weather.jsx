import React from 'react';

class Weather extends React.Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({lon: position.coords.longitude,
                       lat: position.coords.latitude});
        this.weatherQuery();
      });
    }
  }


  constructor(props) {
    super(props);

    this.state = {
      lon: 43.1729,
      lat: -22.9068,
      message: "Weather loading...",
    };
    this.APIkey = '53cc591fbe9fa466bcdf0dd4ef2b75bd';
    this.weatherQuery = this.weatherQuery.bind(this);
  }

  weatherQuery() {
    const request = new XMLHttpRequest();
    request.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.APIkey}`);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const response = JSON.parse(request.responseText);
        console.log(response);
        const temp = response.main.temp;
        console.log(temp);
        this.setState({message: `` });
      } else {
        this.message = "Weather is unable to load.";
      }
    };
    request.send();
  }

  render() {
    return (
      <div className="weatherContainer">
        <h1>The Weather!</h1>

      </div>
    );
  }
}

export default Weather;
