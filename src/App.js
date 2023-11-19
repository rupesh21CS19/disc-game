import { useState } from "react";
import LandingPage from "./components/LandingPage";
import GamePlay from "./components/GamePlay";
function App() {
  const [isStart, setGameStart] = useState(true);

  const toggleGameStart = () => {
    setGameStart((prev) => !prev);
  };

  return (
    <div>
      {isStart ? (
        <GamePlay />
      ) : (
        <LandingPage toggleGameStart={toggleGameStart} />
      )}
    </div>
  );
}

export default App;
