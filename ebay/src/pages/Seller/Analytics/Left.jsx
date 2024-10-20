import LineChart from "./LineChart";

const Left = ({ yearArray, monthArray, mode, currentYear, currentMonth }) => {
  let data = yearArray;
  if (mode === "month") {
    data = monthArray;
  }

  return (
    <div>
      <div className="text-2xl">Report Chart of {mode}s</div>
      <div className="w-[50rem] h-96">
        {mode === "month" && (
          <LineChart
            dataLabel={data}
            dataRevenue={[65, 59, 80, 81, 0, 55, 40, 80, 81, 56, 69, 20, 15]}
          />
        )}
        {mode === "year" && (
          <LineChart dataLabel={data} dataRevenue={[81, 56, 69, 20]} />
        )}
      </div>
    </div>
  );
};

export default Left;
