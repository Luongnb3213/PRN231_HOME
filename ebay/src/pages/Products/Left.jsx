import { NavLink } from "react-router-dom";
const Left = ({ data }) => {
  return (
    <div className="">
      <div className="w-full">
        <div className="">Shop by Category</div>
        <ul>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="font-sans text-stone-800 hover:underline my-1"
              >
                <NavLink>{item}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Left;
