import { useState } from "react";
import SellerDetail from "./SellerDetail";

const MyProducts = () => {
  const [currentBtn, setCurrentBtn] = useState("selling");
  const handleChange = (status) => {
    setCurrentBtn((prev) => status);
  };
  let classNav =
    "w-[32rem] h-12 flex items-center justify-center rounded-lg cursor-pointer hover:opacity-90 transition-all";
  let active = "bg-blue-500 text-white";
  return (
    <div className="bg-stone-200 rounded-md w-full">
      <div className="flex w-full justify-center items-center mb-4">
        <div
          className={`${classNav} ${currentBtn === "selling" ? active : ""}`}
          onClick={() => handleChange("selling")}
        >
          Selling
        </div>
        <div
          className={`${classNav} ${currentBtn === "bidding" ? active : ""}`}
          onClick={() => handleChange("bidding")}
        >
          Bidding
        </div>
      </div>
      <SellerDetail />
      <SellerDetail />
      <SellerDetail />
      <SellerDetail />
      <SellerDetail />
    </div>
  );
};

export default MyProducts;
