import LineChart from "./LineChart";

const Left = ({ month, monthArray }) => {
  return (
    <div>
      <div className="text-2xl">Report Chart of {monthArray[month - 1]}</div>
      <div className="w-[50rem] h-96">
        <LineChart
          dataMonth={monthArray}
          dataRevenue={[65, 59, 80, 81, 0, 55, 40, 80, 81, 56, 69, 20, 15]}
        />
      </div>
    </div>
  );
};

export default Left;
