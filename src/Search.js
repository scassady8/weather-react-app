import React, { useState } from 'react';
import axios from 'axios';
import Forecast from "./Forecast";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  const [city, setCity] = useState(props.city)
  function handleResponse(response) {
  setWeatherData (
      {
        ready: true,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        iconURL: null,
        feelsLikeTemp: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        date:new Date(response.data.dt * 1000),
        sunriseUTC: new Date(response.data.sys.sunrise * 1000),
        sunsetUTC: new Date(response.data.sys.sunset * 1000)
      }
    )
  }

  function search() {
    const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city); 
    
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
  return (
    <div className="Search">
      <form>
        <div className="row search-inputs">
          <div className="col-9">
            <input
              type="search"
              className="form-control float-end input-location"
              placeholder="Enter location"
              autoFocus="on"
              onChange={updateCity}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="col-3 w-100">
            <input
              type="button"
              className="btn form-control float-end shadow-sm current-location-btn"
              value="Current location"
            />
          </div>
          <div className="col-12">
            <span className="float-end">
              <a className="celsius-scale active">°C</a>|
              <a className="farenheit-scale">°F</a>
            </span>
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
