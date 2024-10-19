import { NavLink } from "react-router-dom";

const OrderCard = ({ status }) => {
  return (
    <div className="w-full bg-white p-4 my-1">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <i className="fi fi-rs-shop"></i>
          <div>Shop's name</div>
        </div>
        {status === 0 && (
          <div className="text-blue-600 font-sans font-semibold">
            Processing...
          </div>
        )}
        {status === 1 && (
          <div className="text-green-600 font-sans font-semibold">
            Completed
          </div>
        )}
        {status === 2 && (
          <div className="text-red-600 font-sans font-semibold">
            Rejected...
          </div>
        )}
      </div>
      <NavLink>
        <div className="mt-2">
          <div className="flex justify-between">
            <div className="flex justify-between">
              <img
                src="/productsPic/vivid-blurred-colorful-background.jpg"
                alt=""
                className="w-20 h-20"
              />
              <div className="ml-3 p-4 flex flex-col justify-between">
                <div>Product's name</div>
                <div className="text-sm font-sans font-semibold">Quantity</div>
              </div>
            </div>
            <label>₫290.000</label>
          </div>
        </div>
      </NavLink>
      <div className="flex items-start justify-end">
        <label className="font-sans">Total:</label>
        <label className="text-2xl text-blue-600 ml-2">₫290.000</label>
      </div>
    </div>
  );
};

export default OrderCard;
