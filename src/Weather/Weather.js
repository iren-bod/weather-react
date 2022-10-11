import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "../FormattedDate/FormattedDate";
import WeatherTemperature from "../WeatherTemperature/WeatherTemperature";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setText(`Welcome in ${city}`);
    let apiKey = "473132313b5400bf82583aa234355f9f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="weather-city"
        placeholder="Enter a city.."
        onChange={updateCity}
      />
      <input type="submit" value="Search" className="weather-search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h1>{text}</h1>
        <h3>
          <FormattedDate date={weather.date} />
        </h3>
        <img
          src={weather.icon}
          alt={weather.description}
          className="weather-img"
        />
        <ul>
          <div className="WeatherIndicators">
            <ul>
              <li>
                <WeatherTemperature celsius={weather.temperature} />
              </li>
              <li>
                <strong>Humidity: </strong>
                <span id="humidity">{weather.humidity} %</span>
              </li>
              <li>
                <strong>Wind: </strong>
                <span id="wind">{weather.wind} km/h</span>
              </li>
            </ul>
          </div>
        </ul>
        <p className="WeatherDescription">{weather.description}</p>
        <hr />
        <h2>Forecast for the next 5 days</h2>
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    return form;
  }
}
