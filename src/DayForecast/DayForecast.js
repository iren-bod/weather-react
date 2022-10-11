import React from "react";

import "../DayForecast/DayForecast.css";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

export default function DayForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay() + 1;

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="Day">
      <p className="weather-forecast-day">
        <strong>{day()}</strong>
      </p>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />

      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">{maxTemp()}</span>
        <span className="weather-forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
