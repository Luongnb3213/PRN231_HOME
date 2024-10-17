import { NavLink } from "react-router-dom";

const DetailRight = () => {
  return (
    <>
      <div className="font-sans font-bold text-[1.35rem]">
        ROG STRIX TOUCHSTONE Graphic Card Aluminum Keycap SHIFT Key replacement
        2.75u
      </div>
      <div className="flex items-center gap-4 my-8">
        <img
          src="/productsPic/vivid-blurred-colorful-background.jpg"
          className="h-10 w-10 rounded-full"
          alt=""
        />
        <div className="underline cursor-pointer hover:text-stone-700">
          <NavLink>Hello world</NavLink>
        </div>
      </div>
      <div className="font-sans font-bold text-2xl mb-8">VND 150,000</div>
      <div className="flex items-center gap-2">
        <div>Quantity:</div>
        <input
          type="number"
          name=""
          id=""
          className="w-20 h-12 appearance-none rounded-lg pl-4 border-2 bg-stone-100"
        />
        <div className="text-stone-800">2 available</div>
        <div className="text-red-600">47 sold</div>
      </div>
      <div className="bg-[#3665F3] p-4 text-white text-center rounded-full mt-6 cursor-pointer hover:brightness-95">
        Buy It Now
      </div>
      <div className="bg-white p-4 text-blue-500 text-center rounded-full mt-2 border-blue-500 border cursor-pointer hover:opacity-90">
        Add to cart
      </div>
    </>
  );
};

export default DetailRight;
