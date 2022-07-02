import React, { useState } from 'react';
import axios from 'axios';
import FutureForecastDay from './FutureForecastDay';
import "./FutureForecast.css";

export default function FutureForecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [FutureData, setFutureData] = useState(null);

    function handleResponse(response) {
        setFutureData(response.data.daily[0]);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="futureForecast">
                <div className="row">
                    <div className="col">
                        <FutureForecastDay data={FutureData}/>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
        let lon= props.coord.lon;
        let lat= props.coord.lat;
        const apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return null;  
    }  
}