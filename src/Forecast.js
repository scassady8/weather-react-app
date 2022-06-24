import React, { useState } from 'react';
import axios from 'axios';
import "./Forecast.css";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ready=false})
  function handleResponse(response) {
    setWeatherData (
      {
        ready=true,
        temperature = response.data.main.temp,
        description = response.data.weather[0].description,
        icon = (null),
        feelsLikeTemp = response.data.main.feels_like,
        humidity= response.data.main.humidity,
        wind= response.data.wind.speed,
        sunriseUTC = new Date(response.data.sys.sunrise * 1000),
        sunsetUTC = new Date(response.data.sys.sunset * 1000),
        sunrise = (null),
        sunset = (null),
      }
    )
  }
  if ready {  
  return (
    <div className="Forecast">
      <div className="current-weather">
        <h1>{props.city}</h1>
        <div className="row">
          <div className="col-12">
            <h4>Today</h4>
          </div>
          <div className="col-12">
            <h4 className="current-description">{weatherData.description}</h4>
          </div>
          <div className="col-6 current-temp">
            <img src="" alt="" />
            <span>{Math.round(weatherData.temperature)}° C</span>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLikeTemp)}° C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li>Sunrise: {weatherData.sunrise}</li>
              <li>Sunset: {weatherData.sunset}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="five-day-forecast"></div>
    </div>
  ); }
  else {
  const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
  const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }
}
