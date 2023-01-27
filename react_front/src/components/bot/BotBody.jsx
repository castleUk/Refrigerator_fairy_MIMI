import React from "react";
// component
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../api/Api";

const BotBody = () => {
  const [prizes, setPrizes] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const onRecipeList = async () => {
      try {
        const response = await instance.get(`/api/recipe/all`);
        console.log(JSON.stringify(response.data.body.recipes))
        setPrizes(response.data.body.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    onRecipeList();
    
  }, []);


 

  const winPrizeIndex = 0;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
}));

 

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log('🥳 Prize defined! 🥳');
  };

  return (
    <>
     <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={10}
      />
      <button onClick={handleStart}>Start</button>
    </>
  );
};

export default BotBody;
