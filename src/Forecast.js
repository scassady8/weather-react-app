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
                <ul mt-20>
                <li><FontAwesomeIcon icon="fa-light fa-temperature-high" /><span className="caption"> High/Low</span> {Math.round(props.data.max)}°/{Math.round(props.data.min)}°</li> 
                <li><FontAwesomeIcon icon="fa-light fa-temperature-half" /><span className="caption"> Feels like</span> {Math.round(props.data.feelsLikeTemp)}°</li> 
                </ul>
            </div>
          <div className="col-4">
            <ul mt-20>
              <li><FontAwesomeIcon icon="fa-light fa-droplet" /><span className="caption"> Humidity</span> {props.data.humidity}%</li>
              <li><FontAwesomeIcon icon="fa-light fa-wind" /><span className="caption"> Wind</span> {Math.round(props.data.wind)} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ); 
}
