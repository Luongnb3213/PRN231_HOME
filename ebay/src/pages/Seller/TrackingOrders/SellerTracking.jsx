import { useState } from "react";
import OrderCard from "../../TrackingOrders/OrderCard";
const SellerTracking = () => {
  const [currentNav, setCurrentNav] = useState("processing");

  const handleSelectNav = (nav) => {
    setCurrentNav((prev) => {
      return nav;
    });
  };

  let classNav =
    "text-center h-12 flex justify-center items-center cursor-pointer hover:opacity-80 transition-all hover:text-lg flex-1 duration-300";

  let active = " bg-blue-500 text-white rounded-lg transition-all";
  return (
    <div className="w-4/5 m-auto mt-2">
      <div className="flex justify-between">
        <div
          className={`${classNav} ${currentNav === "processing" && active}`}
          onClick={() => handleSelectNav("processing")}
        >
          Processing
        </div>
        <div
          className={`${classNav} ${currentNav === "approved" && active}`}
          onClick={() => handleSelectNav("approved")}
        >
          Approved
        </div>
        <div
          className={`${classNav} ${currentNav === "rejected" && active}`}
          onClick={() => handleSelectNav("rejected")}
        >
          Rejected
        </div>
      </div>
      <OrderCard status={0} role={"seller"} />
    </div>
  );
};

export default SellerTracking;
