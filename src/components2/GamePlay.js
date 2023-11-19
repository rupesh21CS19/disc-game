import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import Dice from "./Dice";
import Reset from "./Reset";
import Rules from "./Rules";
import { useState } from "react";

const GamePlay = () => {
  const [selectNumber, setSelectNumber] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [score, setScore] = useState(0);

  let ranDOM = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let RandomNM = () => {
    if (!selectNumber) return;

    let randomm = ranDOM(1, 7);
    setDiceNumber(randomm);

    if (selectNumber === diceNumber) {
      setScore((p) => p + diceNumber);
    } else {
      setScore((p) => p - diceNumber);
    }
    setSelectNumber(undefined);
  };

  return (
    <>
      <div className="flex justify-between">
        <TotalScore score={score} setScore={setScore} />
        <SelectNumber
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>

      <Dice
        diceNumber={diceNumber}
        setDiceNumber={setDiceNumber}
        ranDOM={RandomNM}
      />
      <Reset />
      <Rules />
    </>
  );
};

export default GamePlay;
