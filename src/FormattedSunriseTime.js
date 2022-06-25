import React from 'react';

export default function FormattedSunriseTime (props) {
    let hour = props.sunrise.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.sunrise.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    return( <div>
       Sunrise: {hour}:{minutes}
    </div>
    );
}