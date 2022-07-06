import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import FutureForecast from "./FutureForecast";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
  setWeatherData (
      {
        ready: true,
        city: response.data.name,
        coordinates:response.data.coord,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        icondescription: response.data.weather[0].value,
        max: response.data.main.temp_max,
        min: response.data.main.temp_min, 
        feelsLikeTemp: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date:new Date(response.data.dt * 1000),
        sunriseUTC: new Date((response.data.sys.sunrise) * 1000),
        sunsetUTC: new Date((response.data.sys.sunset)* 1000)
      }
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city); 
    
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control float-end"
              placeholder="Enter location"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="button"
              className="btn form-control float-end shadow-sm current-location-btn w-100"
              value="Current location"
            />
          </div>
        </div>
      </form>
      <Forecast data={weatherData} />
    </div>
  ); }
  else {
   search();
   return "Loading...";
  }
}
