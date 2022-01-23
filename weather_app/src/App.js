import { useState } from "react";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter a city name..."
        className="input"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>
            Welcome to the weather app! Please enter a city name to get the
            weather...
          </p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city"> {weatherData.name} </p>
          <p className="temp"> {Math.round(weatherData.main.temp)} °F</p>
          <p className="weather"> {weatherData.weather[0].main} </p>
        </div>
      )}

      {weatherData.cod === "404" ? <p>City not found.</p> : <></>}
    </div>
  );
};

export default App;
