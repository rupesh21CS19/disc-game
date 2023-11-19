const LandingPage = ({ setGameStart }) => {
  return (
    <div className="flex justify-center items-center h-screen gap-1 ">
      <img src="res/dices.png" alt="" className=" w-1/3" />
      <div className="flex flex-col items-end ">
        <h1 className="font-bold text-7xl leading-snug">DICE GAME</h1>
        <button
          className="bg-black text-white px-8 py-1 border-2 border-black rounded-md text-sm hover:bg-white hover:text-black hover:border-solid hover:border-black  "
          onClick={() => setGameStart((e) => !e)}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
