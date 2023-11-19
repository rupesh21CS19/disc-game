const Dice = ({ setDiceNumber, diceNumber, ranDOM }) => {
  return (
    <div className="m-auto pt-4  w-max text-center font-semibold text-lg cursor-pointer">
      <img
        className=" w-40"
        src={`res/dice_${diceNumber}.png`}
        alt=""
        onClick={ranDOM}
      />
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default Dice;
