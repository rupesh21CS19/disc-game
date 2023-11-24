const Dice = ({ diceNumber, setDiceNumber, RandomNumber }) => {
  console.log(diceNumber);
  return (
    <div className="m-auto pt-4  w-max text-center font-semibold text-lg cursor-pointer">
      <img
        className="bg-white w-40"
        src="../res/dice_1.png"
        alt=""
        onClick={RandomNumber}
      />
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default Dice;
