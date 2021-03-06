import React, { useState , useEffect } from "react";
import axios from "axios";
import FutureForecastDay from "./FutureForecastDay";
import "./FutureForecast.css";

export default function FutureForecast(props) {
    let [loaded, setLoaded] = useState(false)
    let [futureData, setFutureData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleResponse(response) {
        setFutureData(response.data.daily);
        setLoaded(true);
    }

    function loadForecast() {
        const apiKey= "c6d74f51206d84d8baa8c0c74cb8a21c";
        let longitude= props.coord.lon;
        let latitude= props.coord.lat;
        let APIUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(APIUrl).then(handleResponse);
    }

    if (loaded) {
        return (
            <div className="futureForecast">
                <div className="row">
                    {futureData.map(function(dailyFutureData, index) {
                        if (index > 0 && index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <FutureForecastDay data={dailyFutureData}/>
                                </div>   
                            );
                        } else { 
                            return null;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        loadForecast();
        return null;  
    }  
}