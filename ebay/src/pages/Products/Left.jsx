import { NavLink } from "react-router-dom";
const Left = ({ data, idParent }) => {
  let classNameLi = "font-sans text-stone-800 hover:underline my-1";

  return (
    <div className="">
      <div className="w-full">
        <div className="">Shop by Category</div>
        <ul>
          {data?.map((item, index) => {
            return (
              <li key={index} className={classNameLi}>
                <NavLink
                  to={`/products/${idParent}/${item.categoryID}`}
                  className={({ isActive }) => (isActive ? "font-bold" : "")}
                >
                  {item.categoryName}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Left;
