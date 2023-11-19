import React from "react";

const LandingPage = ({ toggleGameStart }) => {
  return (
    <div className="sm:flex sm:justify-center  sm:items-center h-screen sm:gap-1    ">
      <img src="res/dices.png" alt="" className=" w-full sm:w-1/3" />
      <div className="flex flex-col sm:items-end  justify-center my-8 mx-2 ">
        <h1 className="font-bold text-6xl sm:text-7xl ">DICE GAME</h1>
        <button
          className="bg-black  text-white px-8 py-1 border-2 border-black rounded-md text-sm hover:bg-white hover:text-black hover:border-solid hover:border-black sm:w-max  w-max   "
          onClick={toggleGameStart}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
