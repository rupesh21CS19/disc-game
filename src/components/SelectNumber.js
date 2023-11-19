const SelectNumber = ({
  SelectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  let btn = [1, 2, 3, 4, 5, 6];

  let select = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="text-xl pt-5 sm:pt-16  sm:mx-20 flex flex-col items-start sm:items-end  font-semibold w-full">
      <p className="text-red-600">{error}</p>
      <div>
        {btn.map((e, i) => (
          <button
            key={i}
            className={`border-solid border-2  border-black w-10 h-10 sm:w-16 sm:h-16 font-bold ml-3 hover:opacity-70 ${
              e === SelectedNumber
                ? "bg-black text-white hover:opacity-100"
                : "bg-white"
            }`}
            onClick={() => select(e)}
          >
            {e}
          </button>
        ))}
      </div>
      <p className="ml-3">Select Number</p>
    </div>
  );
};

export default SelectNumber;
