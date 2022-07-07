import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormattedDate from "./FormattedDate";
import TemperatureConversion from './TemperatureConversion';
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
          <div className="col-4">
                <img src={props.data.icon} alt={props.data.icondescription} />
                <TemperatureConversion temperature={props.data.temperature} />
            </div>
          <div className="col-4">
                <ul>
                <li>High/Low<span className="float-end">{Math.round(props.data.max)}°/{Math.round(props.data.min)}°</span></li> 
                <li>Feels like<span className="float-end">{Math.round(props.data.feelsLikeTemp)}°</span></li> 
                </ul>
            </div>
          <div className="col-4">
            <ul>
              <li>Humidity<span className="float-end">{props.data.humidity}%</span></li>
              <li>Wind<span className="float-end">{Math.round(props.data.wind)} m/s</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ); 
}
