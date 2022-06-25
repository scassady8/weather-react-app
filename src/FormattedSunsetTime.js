import React from 'react';

export default function FormattedSunsetTime (props) {
    let hour = props.sunset.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.sunset.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    return( <div>
       Sunset: {hour}:{minutes}
    </div>
    );
}