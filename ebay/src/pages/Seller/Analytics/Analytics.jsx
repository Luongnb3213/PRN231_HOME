import MonthlyReport from "./MonthlyReport";

const Analytics = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  return (
    <div>
      <div className="w-full flex">
        <MonthlyReport currentYear={currentYear} currentMonth={currentMonth} />
      </div>
    </div>
  );
};

export default Analytics;
