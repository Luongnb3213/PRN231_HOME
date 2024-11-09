import { NavLink } from "react-router-dom";

const ProductCard = ({ productData }) => {
  let url = "";
  if (productData) {
    if (!productData.isBid) {
      url = `/detail/${productData.productID}`;
    } else {
      url = `/detailBid/${productData.productID}`;
    }
  }

  return (
    <NavLink to={url}>
      <div className="w-full">
        <img
          className="w-full h-[18.5rem]"
          src="/productsPic/vivid-blurred-colorful-background.jpg"
          alt=""
        />
        <div>
          <div className="mt-2 hover:underline">{productData?.productName}</div>
          <div className="text-xl font-sans font-bold italic mt-2 cursor-text">
            $ {productData?.price}
          </div>
          <div className="text-stone-700 text-base cursor-text">
            Free shipping
          </div>
          <div className="text-red-600 cursor-text">
            {productData?.quantitySold}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
