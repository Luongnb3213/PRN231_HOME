import Left from "./Left";
import Right from "./Right";
import { useState } from "react";

let yearArray = [2021, 2022, 2023, 2024];
let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthlyReport = ({ currentYear, currentMonth }) => {
  const [mode, setMode] = useState("year");
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div className="flex w-full">
      <Left
        monthArray={monthArray}
        yearArray={yearArray}
        mode={mode}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      <Right
        monthArray={monthArray}
        handleChange={handleChange}
        mode={mode}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
    </div>
  );
};

export default MonthlyReport;
