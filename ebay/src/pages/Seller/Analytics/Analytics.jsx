import MonthlyReport from "./MonthlyReport";
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
const Analytics = () => {
  return (
    <div>
      <div className="w-full flex">
        <MonthlyReport month={1} monthArray={monthArray} />
      </div>
    </div>
  );
};

export default Analytics;
