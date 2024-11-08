import { NavLink } from "react-router-dom";

const DetailRight = ({ productDetail }) => {
  return (
    <>
      <div className="font-sans font-bold text-[1.35rem]">
        {productDetail?.name}
      </div>
      <div className="flex items-center gap-4 my-8">
        <img
          src="/productsPic/vivid-blurred-colorful-background.jpg"
          className="h-10 w-10 rounded-full"
          alt=""
        />
        <div className="underline cursor-pointer hover:text-stone-700">
          <NavLink to={"/seller/shop"}>{productDetail?.sellerName}</NavLink>
        </div>
      </div>
      <div className="font-sans font-bold text-2xl mb-8">
        $ {productDetail?.price}
      </div>
      <div className="flex items-center gap-2">
        <div>Quantity:</div>
        <input
          type="number"
          name=""
          id=""
          className="w-20 h-12 appearance-none rounded-lg pl-4 border-2 bg-stone-100 border-stone-400"
        />
        <div className="text-stone-800">
          {productDetail?.available} available
        </div>
        <div className="text-red-600">{productDetail?.sold} sold</div>
      </div>
      <div className="bg-[#3665F3] p-4 text-white text-center rounded-full mt-6 cursor-pointer hover:brightness-95">
        Buy It Now
      </div>
      <div className="bg-white p-4 text-blue-500 text-center rounded-full mt-2 border-blue-500 border cursor-pointer hover:opacity-90">
        Add to cart
      </div>
      <div className="w-full mt-8 ">
        <div className="mb-6">
          Description:{" "}
          <span className="font-sans">{productDetail?.description}</span>
        </div>
        <div className="mb-6">
          Returns:{" "}
          <span className="font-sans">
            60 days returns. Seller pays for return shipping.
          </span>
        </div>
        <div className="mb-6 flex gap-1 items-center">
          Payments:
          <div className="w-14 h-8 text-2xl rounded-sm text-center border border-stone-700">
            <i className="fi fi-brands-paypal"></i>
          </div>
          <div className="w-14 h-8 text-2xl rounded-sm text-center border border-stone-700">
            <i className="fi fi-brands-cc-visa"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailRight;
