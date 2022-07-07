import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FutureForecastDay(props) {
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.temp.max);
        return `${maxTemperature}°`;
    }
    
    function minTemperature() {
        let minTemperature = Math.round(props.data.temp.min);
        return `${minTemperature}°`;
    }

    function formatDay(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return days[day];
    }

    function getIcon(){
        return `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`; 
    }

    return (
        <div className="FutureForecastDay">
            <div className="futureForecast-day">{formatDay()}</div>
                        <img src={getIcon()} alt={props.data.weather[0].description}/>
                        <div className="futureForecast-temperature">
                            <span className="pe-3">{maxTemperature()}</span>
                            <span className="opacity-75">{minTemperature()}</span>
                        </div>
        </div>
    );
}
