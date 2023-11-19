import React, { useState } from "react";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import Dice from "./Dice";
import Reset from "./Reset";
import Rules from "./Rules";

const GamePlay = () => {
  let [diceNumber, setDiceNumber] = useState(1);
  let [score, setScore] = useState(0);
  let [SelectedNumber, setSelectedNumber] = useState();
  let [error, setError] = useState();
  let [rule, setRule] = useState(false);

  let randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let RandomNumber = () => {
    if (!SelectedNumber) {
      setError("You have not selected any number");
      return;
    }

    let DiceNumber = randomNumber(1, 7);
    setDiceNumber(DiceNumber);

    if (SelectedNumber === DiceNumber) {
      setScore((prev) => prev + DiceNumber);
    } else {
      setScore((prev) => prev - DiceNumber);
    }
    setSelectedNumber(undefined);
  };

  let reset = () => {
    setScore(0);
  };

  return (
    <>
      <div className="flex sm:justify-between flex-col sm:flex-row">
        <TotalScore score={score} />
        <SelectNumber
          setError={setError}
          error={error}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <Dice
        diceNumber={diceNumber}
        setDiceNumber={setDiceNumber}
        RandomNumber={RandomNumber}
      />
      <Reset reset={reset} />
      <Rules rule={rule} setRule={setRule} />
    </>
  );
};

export default GamePlay;
