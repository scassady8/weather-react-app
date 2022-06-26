import React from 'react';
import FormattedDate from "./FormattedDate";
import FormattedSunriseTime from "./FormattedSunriseTime";
import FormattedSunsetTime from "./FormattedSunsetTime";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="current-weather">
        <h1>{props.data.city}</h1>
        <div className="row">
          <div className="col-12">
            <h4><FormattedDate date={props.data.date} /></h4>
          </div>
          <div className="col-12">
            <h4 className="text-capitalize">{props.data.description}</h4>
          </div>
          <div className="col-6 current-temp">
            <img src={props.data.icon} alt={props.data.value} />
            <span>{Math.round(props.data.temperature)}° C</span>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li>Feels like: {Math.round(props.data.feelsLikeTemp)}° C</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} m/s</li>
            </ul>
          </div>
          <div className="col-3 current-details">
            <ul>
              <li><FormattedSunriseTime sunrise={props.data.sunriseUTC}/></li>
              <li><FormattedSunsetTime sunset={props.data.sunsetUTC}/></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="five-day-forecast"></div>
    </div>
  ); 
}
