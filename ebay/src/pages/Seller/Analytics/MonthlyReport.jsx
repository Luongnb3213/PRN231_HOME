import Left from "./Left";
import Right from "./Right";
import { useState } from "react";

const MonthlyReport = ({ month, monthArray }) => {
  const [mode, setMode] = useState("year");
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div className="flex w-full">
      <Left month={month} monthArray={monthArray} />
      <Right monthArray={monthArray} handleChange={handleChange} mode={mode} />
    </div>
  );
};

export default MonthlyReport;
