import { useEffect, useState } from "react";

let exampleYear = [2021, 2022, 2023, 2024];

const YearControl = ({ currentYear }) => {
  const [selected, setSelected] = useState(currentYear);

  const handleSelectChange = (e) => {
    setSelected(() => e.target.value);
  };

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
          value={selected}
        >
          {exampleYear.map((item, index) => {
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

export default YearControl;
