import { NavLink } from "react-router-dom";
import OrderCard from "./OrderCard";
import BidCard from "./BidCard";

const TrackingBid = () => {
  return (
    <div className=" w-5/6 m-auto rounded-sm grid grid-cols-6 p-8">
      {/* <div className="w-full h-full p-4 col-span-1">
        <ul>
          <li className="hover:text-blue-600 hover:scale-105 transition mt-4">
            <NavLink>All orders</NavLink>
          </li>
          <li className="hover:text-blue-600 hover:scale-105 transition mt-4">
            <NavLink>Processing orders</NavLink>
          </li>
          <li className="hover:text-blue-600 hover:scale-105 transition mt-4">
            <NavLink>Completed orders</NavLink>
          </li>
        </ul>
      </div> */}
      <div className="w-full h-full bg-stone-300 col-span-5 p-4">
        <BidCard />
        <BidCard />
        <BidCard />
        <BidCard />
      </div>
    </div>
  );
};

export default TrackingBid;
