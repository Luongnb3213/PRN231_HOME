import { useState } from "react";
const Right = (month, monthArray) => {
  const [selectedOption, setSelectedOption] = useState("year");
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Cập nhật giá trị khi chọn radio
  };
  return (
    <div className="bg-stone-400 flex-1 p-10">
      <div>Filter by</div>
      <div>
        <input
          type="radio"
          name=""
          id="radioYear"
          value="year"
          checked={selectedOption === "year"}
          onChange={handleChange}
          className="select-none cursor-pointer"
        />
        <label htmlFor="radioYear" className="select-none cursor-pointer">
          {" "}
          Year
        </label>
      </div>
      <div>
        <input
          type="radio"
          name=""
          id="radioMonth"
          value="month"
          checked={selectedOption === "month"}
          onChange={handleChange}
          className="select-none cursor-pointer"
        />
        <label htmlFor="radioMonth" className="select-none cursor-pointer">
          {" "}
          Month
        </label>
      </div>
    </div>
  );
};

export default Right;
