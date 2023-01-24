import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// template
import Card from "react-bootstrap/Card";
// component
import WeatherComponent from "../weather/WeatherComponent";
import TimeComponent from "../time/TimeComponent";
import RecipeReco from "../recipe/RecipeReco";

const ItemContentComponent = () => {
  const [coords, saveCoords] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [tempCheck, setTempCheck] = useState();
  const [timeCheck, setTimeCheck] = useState();
  const [seasonCheck, setSeasonCheck] = useState();

  const handleGeoSucc = (position) => {
    const latitude = position.coords.latitude; // 경도
    const longitude = position.coords.longitude; // 위도
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  };

  const handleGeoErr = (error) => {
    console.log("geo err! " + error);
  };

  const getWeather = async (lat, lon) => {
    const key = "6cd557f1c9eb8846c03da7621aabc12e";
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      );

      const temp = Math.round(response.data.main.temp) - 273;
      if (temp <= 0) {
        setTempCheck("0도이하");
      }
      if (0 < temp <= 5) {
        setTempCheck("5도이하");
      }
      if (5 < temp <= 10) {
        setTempCheck("10도이하");
      }
      if (10 < temp <= 15) {
        setTempCheck("15도이하");
      }
      if (15 < temp <= 20) {
        setTempCheck("20도이하");
      }
      if (20 < temp <= 25) {
        setTempCheck("25도이하");
      }
      if (temp >= 30) {
        setTempCheck("30도이상");
      }
      const weather =
        response.data.weather[response.data.weather.length - 1].main;
      setTemp(temp);
      setWeather(weather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const requestCoords = () => {
      navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
    };
    requestCoords();
    dateChecking();
  }, []);

  const dateChecking = () => {
    const date = new Date();
    if (5 <= date.getHours() < 11) {
      setTimeCheck("아침");
    }
    if (11 <= date.getHours() < 16) {
      setTimeCheck("점심");
    }
    if (16 <= date.getHours() < 20) {
      setTimeCheck("저녁");
    }
    if (20 <= date.getHours() <= 24) {
      setTimeCheck("야식");
    }

    if (3 <= date.getMonth + 1 < 6) {
      setSeasonCheck("봄");
    }
    if (6 <= date.getMonth + 1 < 9) {
      setSeasonCheck("여름");
    }
    if (9 <= date.getMonth + 1 < 12) {
      setSeasonCheck("가을");
    }
    if (12 <= date.getMonth + 1 < 3) {
      setSeasonCheck("겨울");
    }
  };

  return (
    <div className="ingr-content-component">
      <WeatherComponent temp={temp} weather={weather} />
      <TimeComponent />
      <RecipeReco standard={tempCheck} name="기온" />
      <RecipeReco standard={weather} name="날씨" />
      <RecipeReco standard={timeCheck} name="시간" />
      <RecipeReco standard={seasonCheck} name="계절" />
    </div>
  );
};

export default ItemContentComponent;
