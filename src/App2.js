import React, { useState } from "react";
import LandingPage from "./components2/LandingPage";
import GamePlay from "./components2/GamePlay";
const App2 = () => {
  const [gameStart, setGameStart] = useState(true);
  return (
    <div>
      {gameStart ? <GamePlay /> : <LandingPage setGameStart={setGameStart} />}
    </div>
  );
};

export default App2;
