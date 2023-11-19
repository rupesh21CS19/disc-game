import React from "react";

const Rules = ({ rule, setRule }) => {
  return (
    <>
      <center>
        <button
          className="border-2 px-6 p-0 text-sm  border-slate-950 rounded-md font-semibold text-white bg-black hover:text-black hover:bg-white "
          onClick={() => setRule((e) => !e)}
        >
          {rule ? "Hide " : "Show "}
          Rules
        </button>

        {rule ? (
          <div className="  bg-pink-100 m-3 p-3 text-start w-94 sm:w-max">
            <h1 className="my-2 font-bold">How to play dice game</h1>
            <ul className="  ">
              <li>1.Select any number</li>
              <li>2.Click on dice image </li>
              <li>
                3.after click on dice if selected number is equal to dice number
                you will get same point as dice
              </li>
              <li>4.if you get wrong guess then 2 point will be dedcuted </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </center>
    </>
  );
};

export default Rules;
