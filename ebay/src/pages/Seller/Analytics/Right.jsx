import MonthControl from "./MonthControl";
import YearControl from "./YearControl";

const Right = ({
  monthArray,
  handleChange,
  mode,
  currentMonth,
  currentYear,
}) => {
  let control = <YearControl currentYear={currentYear} />;
  if (mode === "month") {
    control = (
      <MonthControl currentMonth={currentMonth} monthArray={monthArray} />
    );
  }

  return (
    <div className="flex-1 p-10">
      <div className="text-xl">Filter by</div>
      <div className="scale-95 mx-4 my-4">
        <input
          type="radio"
          name=""
          id="radioYear"
          value="year"
          checked={mode === "year"}
          onChange={handleChange}
          className="select-none cursor-pointer"
        />
        <label htmlFor="radioYear" className="select-none cursor-pointer">
          {" "}
          Year
        </label>
      </div>
      <div className="scale-95 mx-4 my-4">
        <input
          type="radio"
          name=""
          id="radioMonth"
          value="month"
          checked={mode === "month"}
          onChange={handleChange}
          className="select-none cursor-pointer"
        />
        <label htmlFor="radioMonth" className="select-none cursor-pointer">
          {" "}
          Month
        </label>
      </div>
      {control}
    </div>
  );
};

export default Right;
