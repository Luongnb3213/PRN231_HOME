import { NavLink } from "react-router-dom";

const ButtonAnalytics = () => {
  return (
    <div className="w-32 h-11 bg-blue-500 text-white font-sans font-semibold text-sm text-center leading-[2.75rem] rounded-lg cursor-pointer hover:opacity-90 transition-all">
      <NavLink to={"/seller/analytics"}>Go to Analytics</NavLink>
    </div>
  );
};

export default ButtonAnalytics;
