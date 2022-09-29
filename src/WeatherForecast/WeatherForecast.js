import React from "react";

import DayForecast from "../DayForecast/DayForecast";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <DayForecast day="Wednesday" temperaturemax="15" temperaturemin="8" />
      <DayForecast day="Thursday" temperaturemax="20" temperaturemin="9" />
      <DayForecast day="Friday" temperaturemax="19" temperaturemin="5" />
      <DayForecast day="Saturday" temperaturemax="16" temperaturemin="7" />
      <DayForecast day="Sunday" temperaturemax="11" temperaturemin="3" />
    </div>
  );
}
