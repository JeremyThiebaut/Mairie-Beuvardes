import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    {} as WeatherData
  );
  // const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=49.1402&lon=3.4892&appid=fdd0fd85aff2f0d914c2fccf930caedb`;

  console.log(API_URL);
  const getWeather = async () => {
    const result: AxiosResponse<WeatherData> = await axios(API_URL);
    setWeatherData(result.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      {weatherData.name && (
        <div>
          <p>
            Location: {weatherData.name}, {weatherData.sys.country}
          </p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
