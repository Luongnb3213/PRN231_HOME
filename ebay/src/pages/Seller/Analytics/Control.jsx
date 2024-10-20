import { useEffect, useState } from "react";

let exampleYear = [2021, 2022, 2023, 2024];

const Control = ({ currentYear, currentMonth, monthArray, mode }) => {
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (currentYear) {
      let initateYear = exampleYear.find((item) => item === currentYear);
      console.log(initateYear);

      setSelected(initateYear);
    }
    if (currentMonth) {
      let initateMonth = monthArray.find((item) => item === currentMonth);
      console.log(initateMonth);

      setSelected(initateMonth);
    }
  }, [mode]);

  const handleSelectChange = (e) => {
    setSelected(() => e.target.value);
  };

  let datas;
  if (currentYear) {
    datas = exampleYear;
  }
  if (currentMonth) {
    datas = monthArray;
  }
  return (
    <div className="flex justify-between items-end">
      <div>
        <div className="inline-block">Total:</div>
        <div className="inline-block ml-2 text-xl">₫1.000.000</div>
      </div>
      <div className="h-32">
        <select
          name=""
          id=""
          className="outline-none w-40 border border-stone-500 p-2"
          onChange={(e) => handleSelectChange(e)}
        >
          {datas.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Control;
