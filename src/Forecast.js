import React from 'react';
import "./Forecast.css";

export default function Forecast() {
  let info = {
    city: "Trondheim",
    desc: "Overcast",
    temp: 10,
    feel: 9,
    humid: 20,
    wind: 5,
    sunrise: "5:40",
    sunset: "20:50"
  };
  return (
    <div className="Forecast">
      <div className="current-weather">
        <h1>{info.city}</h1>
        <div className="row">
          <div className="col-12">
            <h4>Today</h4>
          </div>
          <div className="col-12">
            <h4 className="current-description">{info.desc}</h4>
          </div>
          <div className="col-6 current-temp">
            <img src="" alt="" />
            <span>{info.temp}° C</span>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li>Feels like: {info.feel}° C</li>
              <li>Humidity: {info.humid}%</li>
              <li>Wind: {info.wind} m/s</li>
            </ul>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li>Sunrise: {info.sunrise}</li>
              <li>Sunset: {info.sunset}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="five-day-forecast"></div>
    </div>
  );
}
