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
       <span className="temperatures">
            <span className="current-temp">{Math.round(props.temperature)} </span>
            <span className="units"><a >°C</a>| <a href="/" onClick={showFahrenheit}>°F</a></span>
        </span>
           
    );
} else {
    let fahrenheitTemperature = (props.temperature * 9) /5 + 32 ;  
    return ( 
        <span className="temperatures">
            <span className="current-temp">{Math.round(fahrenheitTemperature)}</span>
            <span className="units"><a href="/" onClick={showCelsius}>°C</a>| <a >°F</a></span>
        </span>
    );
}   
}