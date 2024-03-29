import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// template
// component
import WeatherComponent from "../weather/WeatherComponent";
import TimeComponent from "../time/TimeComponent";
import RecipeReco from "../recipe/RecipeReco";

const ItemContentComponent = (props) => {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [tempCheck, setTempCheck] = useState();
  const [timeCheck, setTimeCheck] = useState();
  const [seasonCheck, setSeasonCheck] = useState();





  
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
      if (1 <= temp <= 5) {
        setTempCheck("5도이하");
      }
      if (6 <= temp <= 10) {
        setTempCheck("10도이하");
      }
      if (11 <= temp <= 15) {
        setTempCheck("15도이하");
      }
      if (16 <= temp <= 20) {
        setTempCheck("20도이하");
      }
      if (21 <= temp <= 25) {
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
    const handleGeoSucc = (position) => {
      const latitude = position.coords.latitude; // 경도
      const longitude = position.coords.longitude; // 위도

      getWeather(latitude, longitude);
    };

    const handleGeoErr = (error) => {
      console.log("geo err! " + error);
    };

    const requestCoords = () => {
      navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
    };

    const Checking = () => {
      if (5 <= props.time <= 10) {setTimeCheck("아침")}
      if (11 <= props.time <= 15) {setTimeCheck("점심")}
      if (16 <= props.time <= 20) {setTimeCheck("저녁")}
      if (21 <= props.time <= 24) {setTimeCheck("야식")}
      if (3 <= props.season <= 5) {setSeasonCheck("봄")}
      if (6 <= props.season <= 8) { setSeasonCheck("여름")}
      if (9 <= props.season <= 11) {setSeasonCheck("가을")}
      if (12 <= props.season <= 2) {setSeasonCheck("겨울")}
    }

    requestCoords();
    Checking();
  }, [props.time,props.season]);

  return (
    <div className="ingr-content-component">
      <WeatherComponent temp={temp} weather={weather} />
      <TimeComponent />
      {tempCheck && weather && timeCheck && seasonCheck &&  <RecipeReco tempCheck={tempCheck} weather={weather} timeCheck={timeCheck} seasonCheck={seasonCheck} />}
      {/* <RecipeReco standard={weather} name="날씨" />
      <RecipeReco standard={timeCheck} name="시간" />
      <RecipeReco standard={seasonCheck} name="계절" /> */}
    </div>
  );
};

export default ItemContentComponent;
