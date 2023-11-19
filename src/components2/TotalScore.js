const TotalScore = ({ score, setScore }) => {
  return (
    <div className="text-xl text-center w-max mt-16 ml-20">
      <h2 className="text-6xl font-semibold" >{score}</h2>
      <p>TotalScore</p>
    </div>
  );
};

export default TotalScore;
