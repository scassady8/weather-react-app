import React from 'react';

export default function FutureForecastDay(props) {
    function maxTemperature() {
        let maxTemperature = Math.round(props.data.temp.max)
    }
    
    function maxTemperature() {
        let minTemperature = Math.round(props.data.temp.min)
    }

    function formatDay(){
        let date = new Date(response.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div className="FutureForecastDay">
            <div className="futureForecast-day">{formatDay()}</div>
                        <img src={props.data.weather[0].icon} alt={props.data.weather[0].description}/>
                        <div className="futureForecast-temperature">
                            <span className="futureForecast-temperature-max">{maxTemperature()}°</span>
                            <span className="futureForecast-temperature-min">{minTemperature()}°</span>
                        </div>
        </div>
    );
}
