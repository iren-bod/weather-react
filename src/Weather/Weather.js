import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
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
        <h3>Tuesday 18:02</h3>
        <img
          src={weather.icon}
          alt={weather.description}
          className="weather-img"
        />
        <ul>
          <div className="WeatherIndicators">
            <ul>
              <li>
                <strong>Temperature: </strong>
                <span id="temperature">
                  {Math.round(weather.temperature)}°C
                </span>
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
      </div>
    );
  } else {
    return form;
  }
}
