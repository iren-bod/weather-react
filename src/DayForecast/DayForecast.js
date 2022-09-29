import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

import "../DayForecast/DayForecast.css";

export default function DayForecast(props) {
  return (
    <div className="Day">
      <p className="weather-forecast-day">
        <strong>{props.day}</strong>
      </p>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="yellow"
        size="50"
        animate={true}
      />

      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {props.temperaturemax}°
        </span>
        <span className="weather-forecast-temperature-min">
          {props.temperaturemin}°
        </span>
      </div>
    </div>
  );
}
