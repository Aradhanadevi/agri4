import React, { useState } from "react";
import axios from "axios";
import "../comp/Css/WeatherBlogPage.css"; // Ensure this CSS file exists
import search_icon from "../Assets/search.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";
import rain_icon from "../Assets/rain.png";

const WeatherBlogPage = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputCity, setInputCity] = useState("");
  const [cropSuggestion, setCropSuggestion] = useState("");
  const [pestDiseaseWarning, setPestDiseaseWarning] = useState("");

  const apiKey = "46f13a9d63d5c3e0b5e790144d01aa99";

  const fetchWeatherData = async (cityName) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      setLoading(false);
      setError(null);
      recommendCropsAndPests(response.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Unauthorized: Invalid API key.");
      } else if (err.response && err.response.status === 404) {
        setError("City not found.");
      } else {
        setError("Error fetching the weather data.");
      }
      setLoading(false);
    }
  };

  const recommendCropsAndPests = (data) => {
    const temp = data.main.temp;
    const humidity = data.main.humidity;

    if (temp >= 20 && temp <= 30 && humidity >= 40 && humidity <= 60) {
      setCropSuggestion("Suggested Crop: Wheat, Barley, or Maize.");
      setPestDiseaseWarning(
        "High risk of leaf rust and stem rust in wheat during this season."
      );
    } else if (temp > 30 && humidity > 60) {
      setCropSuggestion("Suggested Crop: Rice, Sugarcane, or Cotton.");
      setPestDiseaseWarning(
        "High risk of pest diseases like brown planthopper and stem borer in rice."
      );
    } else {
      setCropSuggestion("Suggested Crop: Potato, Pulses, or Soybean.");
      setPestDiseaseWarning(
        "Watch out for pests like aphids and caterpillars."
      );
    }
  };

  const handleCityChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchWeatherData(inputCity);
  };

  return (
    <div className="weather-main">
      <div className="WeatherContainer weather">
        <div className="search-bar">
          <input
            type="text"
            value={inputCity}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
          <img src={search_icon} alt="search" onClick={handleSubmit} />
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {weatherData && !loading && (
          <>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="weather-icon"
            />
            <p className="temperature">{weatherData.main.temp}°C</p>
            <p className="location">{weatherData.name}</p>

            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="humidity" />
                <div>
                  <p className="weather-value">{weatherData.main.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>

              <div className="col">
                <img src={wind_icon} alt="wind" />
                <div>
                  <p className="weather-value">{weatherData.wind.speed} Km/h</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>

            {/* Display crop suggestion and pest warning */}
            <div className="crop-advice">
              <h3>{cropSuggestion}</h3>
              <p>{pestDiseaseWarning}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherBlogPage;
