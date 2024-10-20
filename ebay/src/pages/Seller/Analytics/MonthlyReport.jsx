import Left from "./Left";
import Right from "./Right";

const MonthlyReport = ({ month, monthArray }) => {
  return (
    <div className="flex w-full">
      <Left month={month} monthArray={monthArray} />
      <Right month={month} monthArray={monthArray} />
    </div>
  );
};

export default MonthlyReport;
