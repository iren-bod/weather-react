import React from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather/Weather";
import WeatherForecast from "./WeatherForecast/WeatherForecast";
import ProjectLink from "./ProjectLink/ProjectLink";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="Weather">
      <Weather />
      <hr />
      <h2>Forecast for the next 5 days</h2>
      <WeatherForecast />
      <hr />
      <ProjectLink />
    </div>
  </StrictMode>
);
