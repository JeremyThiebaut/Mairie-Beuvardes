import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import styles from "./styles.module.scss";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    {} as WeatherData
  );
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=beuvardes&units=metric&lang=fr&appid=${API_KEY}`;
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
        <div className={styles.weather}>
          <div className={styles.weather__top_container}>
            <div className={styles.weather__top_top}>
              <Image
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="/"
                width={100}
                height={100}
              />
              <p className={styles.weather__top_text}>
                {weatherData.weather[0].description}
              </p>
            </div>
            <div className={styles.weather__top_right_center}>
              <p className={styles.weather__top_right}>
                {weatherData.main.temp}&#176;
              </p>
              <div className={styles.weather__top_right_container}>
                <p className={styles.weather__top_right_down}>
                  min {weatherData.main.temp_min.toFixed(0)}&#176;
                </p>
                <p className={styles.weather__top_right_down}>
                  max {weatherData.main.temp_max.toFixed(0)}&#176;
                </p>
              </div>
            </div>
          </div>
          <div className={styles.weather__bottom}>
            <p className={styles.weather__bottom_title}>
              Météo à {weatherData.name}
            </p>
            <div className={styles.weather__bottom_container}>
              <div>
                <p className={styles.weather__bottom_description}>Ressenti</p>
                <p className={styles.weather__bottom_text}>
                  {weatherData.main.feels_like.toFixed(0)}&#176;
                </p>
              </div>
              <div>
                <p className={styles.weather__bottom_description}>Humidité</p>
                <p className={styles.weather__bottom_text}>
                  {weatherData.main.humidity}%
                </p>
              </div>
              <div>
                <p className={styles.weather__bottom_description}>Vent</p>
                <p className={styles.weather__bottom_text}>
                  {(weatherData.wind.speed * 3.6).toFixed(0)} km/h
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
