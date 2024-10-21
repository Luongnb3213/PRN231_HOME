import { NavLink } from "react-router-dom";

const ProductCard = () => {
  return (
    <NavLink to={"/detail"}>
      <div className="w-full">
        <img
          className="w-full h-[18.5rem]"
          src="/productsPic/vivid-blurred-colorful-background.jpg"
          alt=""
        />
        <div>
          <div className="mt-2 hover:underline">
            Product name nhé Product name nhé Product name nhé
          </div>
          <div className="text-xl font-sans font-bold italic mt-2 cursor-text">
            VND 15,000,000
          </div>
          <div className="text-stone-700 text-base cursor-text">
            Free shipping
          </div>
          <div className="text-red-600 cursor-text">36 sold</div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
