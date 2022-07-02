import React, { useState } from "react";
import axios from "axios";
import FutureForecastDay from "./FutureForecastDay";
import "./FutureForecast.css";

export default function FutureForecast(props) {
    let [loaded, setLoaded] = useState(false)
    let [FutureData, setFutureData] = useState(null);

    function handleResponse(response) {
        setFutureData(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="futureForecast">
                <div className="row">
                    <div className="col">
                        <FutureForecastDay data={FutureData[0]}/>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
        let lon= props.coord.lon;
        let lat= props.coord.lat;
        const APIUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(APIUrl).then(handleResponse);

        return null;  
    }  
}