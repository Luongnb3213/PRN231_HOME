import { NavLink } from "react-router-dom";

const ButtonAnalytics = () => {
  return (
    <NavLink to={"/seller/analytics"}>
      <div className="w-32 h-11 bg-blue-500 text-white font-sans font-semibold text-sm text-center leading-[2.75rem] rounded-lg cursor-pointer hover:opacity-90 transition-all">
        Go to Analytics
      </div>
    </NavLink>
  );
};

export default ButtonAnalytics;
