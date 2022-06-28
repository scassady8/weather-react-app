import React, { useState } from 'react';
import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
    const [unit, setUnit] = useState("metric");
    
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("metric");
    }

    if (unit=== "metric") {return (
       <div className="temperatures">
            <div className="col-6 current-temp">
                <img src={props.icon} alt={props.icondescription} />
                <span>{Math.round(props.temperature)} </span>
                <span><a >°C</a>| <a href="/" onClick={showFahrenheit}>°F</a></span>
            </div>
            <div className="col-3 current-details">
                <ul>
                <li>Max: {Math.round(props.max)}°</li> 
                <li>Min: {Math.round(props.min)}°</li> 
                 <li>Feels like: {Math.round(props.feelsLikeTemp)}°</li> 
                </ul>
            </div>
        </div>
    );
} else {
    let fahrenheitTemperature = (props.temperature * 9) /5 + 32 ; 
    let fahrenheitMax = (props.max * 9) /5 + 32 ; 
    let fahrenheitMin = (props.min * 9) /5 + 32 ; 
    let fahrenheitFeelLike = (props.feelsLikeTemp * 9) /5 + 32 ; 
    return ( 
        <div className="temperatures">
            <div className="col-6 current-temp">
                <img src={props.data.icon} alt={props.data.value} />
                <span>{Math.round(fahrenheitTemperature)}</span>
                <span className="scale">
                    <a href="/" onClick={showCelsius}>°C</a>| <a >°F</a>
                </span>
            </div>
            <div className="col-3 current-details">
                <ul>
                <li>Max: {Math.round(fahrenheitMax)}°</li> 
                <li>Min: {Math.round(fahrenheitMin)}°</li> 
                 <li>Feels like: {Math.round(fahrenheitFeelLike)}°</li> 
                </ul>
            </div>
        </div>
    );
}   
}