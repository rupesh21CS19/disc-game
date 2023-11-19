const Rules = () => {
  return (
    <>
      <center>
        <button className="border-2 px-6 p-0 text-sm  border-slate-950 rounded-md font-semibold text-white bg-black hover:text-black hover:bg-white ">
          Show Rules
        </button>

        <div className=" bg-pink-100 p-3 my-3 w-max text-start">
          <h1 className="my-2 font-bold">How to play dice game</h1>
          <ul>
            <li>Select any number</li>
            <li> Click on dice image </li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>if you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </div>
      </center>
    </>
  );
};

export default Rules;
