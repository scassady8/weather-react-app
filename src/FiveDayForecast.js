import React from 'react';
import "./FiveDayForecast.css";

export default function FiveDayForecast(props) {
    function handleResponse(response) {
        return (
            console.log(response.data);
        )
    }

    const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
    let lon= props.coord.lon;
    let lat= props.coord.lat;
    const apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="fiveDayForecast">
            <div className="row">
                <div className="col">
                    <div className="fiveDayForecast-day">Mon</div>
                    <img src='http://openweathermap.org/img/wn/01d@2x.png' />
                    <div className="fiveDayForecast-temperature">
                        <span className="fiveDayForecast-temperature-max">20°</span>
                        <span className="fiveDayForecast-temperature-min">5°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}