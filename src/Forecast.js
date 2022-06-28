import React from 'react';
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
          <TemperatureConversion temperature={props.data.temperature} feelsLikeTemp={props.data.feelsLikeTemp} max={props.data.max} min={props.data.min} icon={props.data.icon} icondescription={props.data.icondescription}/>
          <div className="col-md-4 current-details">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} m/s</li>
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
