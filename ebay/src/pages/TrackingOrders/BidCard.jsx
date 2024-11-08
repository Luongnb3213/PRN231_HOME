import { NavLink } from "react-router-dom";

const BidCard = () => {
  let classButton = `w-40 p-2 bg-blue-500 text-center rounded-sm hover:opacity-90 transition-all mt-4 (option cursor-not-allowed opacity-50)`;

  return (
    <div className="w-full bg-white p-4 my-1 flex justify-between">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <i className="fi fi-rs-shop"></i>
            <div>Shop's name</div>
          </div>
        </div>
        <NavLink to={"/detail"}>
          <div className="mt-2">
            <div className="flex justify-between">
              <div className="flex justify-between">
                <img
                  src="/productsPic/vivid-blurred-colorful-background.jpg"
                  alt=""
                  className="w-20 h-20"
                />
                <div className="ml-3 p-4 flex flex-col justify-between">
                  <div className="whitespace-nowrap overflow-hidden text-ellipsis max-w-72">
                    Product's name
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="border border-stone-500 rounded-lg w-2/5 p-4">
        <div>
          <label>Current bid: </label>
          <label>4545</label>
        </div>
        <div>
          <label>Your bid: </label>
          <label>4545</label>
        </div>
        <div>
          <label>Time left: </label>
          <label>1</label>
        </div>
        <div className={classButton}>Increase Bid</div>
      </div>
    </div>
  );
};

export default BidCard;
