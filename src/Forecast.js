import React, { useState } from 'react';
import axios from 'axios';
import FormattedDate from "./FormattedDate";
import FormattedSunriseTime from "./FormattedSunriseTime";
import FormattedSunsetTime from "./FormattedSunsetTime";
import "./Forecast.css";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
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
  if (weatherData.ready) {  
  return (
    <div className="Forecast">
      <div className="current-weather">
        <h1>{props.city}</h1>
        <div className="row">
          <div className="col-12">
            <h4><FormattedDate date={weatherData.date} /></h4>
          </div>
          <div className="col-12">
            <h4 className="text-capitalize">{weatherData.description}</h4>
          </div>
          <div className="col-6 current-temp">
            <img src={weatherData.iconURL} alt="" />
            <span>{Math.round(weatherData.temperature)}° C</span>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLikeTemp)}° C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} m/s</li>
            </ul>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li><FormattedSunriseTime sunrise={weatherData.sunriseUTC}/></li>
              <li><FormattedSunsetTime sunset={weatherData.sunsetUTC}/></li>
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
