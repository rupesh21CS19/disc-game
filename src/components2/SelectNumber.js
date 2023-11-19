const SelectNumber = ({ setSelectNumber, selectNumber }) => {
  let selectedNumber = (e) => {
    setSelectNumber(e);
  };

  let btn = [1, 2, 3, 4, 5, 6];
  return (
    <div className="text-xl pt-16 mx-20 flex flex-col items-end leading-8 font-semibold w-full">
      <p className="text-red-600">error</p>
      <div>
        {btn.map((e, i) => (
          <button
            key={i}
            className={`border-solid border-2  border-black w-16 h-16 font-bold ml-3 hover:opacity-70 ${
              e === selectNumber ? "bg-black text-white" : ""
            }`}
            onClick={() => selectedNumber(e)}
          >
            {e}
          </button>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

export default SelectNumber;
