import { NavLink } from "react-router-dom";
const Left = () => {
  return (
    <div className="">
      <div className="w-full">
        <div className="">Shop by Category</div>
        <ul>
          <li className="font-sans text-stone-800 hover:underline my-1">
            <NavLink>Radio Control</NavLink>
          </li>
          <li className="font-sans text-stone-800 hover:underline my-1">
            <NavLink>Kid toys</NavLink>
          </li>
          <li className="font-sans text-stone-800 hover:underline my-1">
            <NavLink>Action figures</NavLink>
          </li>
          <li className="font-sans text-stone-800 hover:underline my-1">
            <NavLink>Doll & Bear</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
