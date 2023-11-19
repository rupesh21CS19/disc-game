import React from "react";

const Reset = ({ reset }) => {
  return (
    <center>
      <button
        className="border-2 m-3 px-6 text-sm border-slate-950 rounded-md font-semibold hover:text-white hover:bg-black"
        onClick={reset}
      >
        Reset Score
      </button>
    </center>
  );
};

export default Reset;
