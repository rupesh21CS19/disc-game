import React from "react";

const TotalScore = ({ score }) => {
  return (
    <div className="text-xl text-center w-max mt-6 ml-5 sm:mt-16 sm:ml-20">
      <h2 className="text-6xl font-semibold">{score}</h2>
      <p>TotalScore</p>
    </div>
  );
};

export default TotalScore;
