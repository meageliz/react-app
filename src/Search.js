import axios from "axios";
import React, { useState } from "react";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "53315a4c01471ff10f1bbba4b3a95f94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div className="Search">
      <h1>Weather Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
      <ul>
        <li>
          The temperature in {city} is: {weather.temperature}
        </li>
        <li>
          The overall weather in {city} is: {weather.description}
        </li>
        <li>
          The humidity in {city} is: {weather.humidity}
        </li>
        <li>
          The windspeed in {city} is: {weather.wind}
        </li>
        <li>
          Icon: <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
}
