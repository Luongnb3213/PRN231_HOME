import { NavLink } from "react-router-dom";
import { Pagination } from "antd";
import ConfigProvider from "antd";

const Right = () => {
  return (
    <>
      <div className={`w-full grid grid-cols-4 gap-4 gap-y-10`}>
        <NavLink>
          <div className="w-full">
            <img
              className="w-full h-[18.5rem]"
              src="/productsPic/vivid-blurred-colorful-background.jpg"
              alt=""
            />
            <div>
              <div>Product name nhé Product name nhé Product name nhé</div>
              <div className="text-xl font-sans font-bold italic mt-2">
                VND 15,000,000
              </div>
              <div className="text-stone-700 text-base">Free shipping</div>
              <div className="text-red-600">36 sold</div>
            </div>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <img
              className="w-full h-[18.5rem]"
              src="/productsPic/vivid-blurred-colorful-background.jpg"
              alt=""
            />
            <div>
              <div>Product name nhé Product name nhé Product name nhé</div>
              <div className="text-xl font-sans font-bold italic mt-2">
                VND 15,000,000
              </div>
              <div className="text-stone-700 text-base">Free shipping</div>
              <div className="text-red-600">36 sold</div>
            </div>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <img
              className="w-full h-[18.5rem]"
              src="/productsPic/vivid-blurred-colorful-background.jpg"
              alt=""
            />
            <div>
              <div>Product name nhé Product name nhé Product name nhé</div>
              <div className="text-xl font-sans font-bold italic mt-2">
                VND 15,000,000
              </div>
              <div className="text-stone-700 text-base">Free shipping</div>
              <div className="text-red-600">36 sold</div>
            </div>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <img
              className="w-full h-[18.5rem]"
              src="/productsPic/vivid-blurred-colorful-background.jpg"
              alt=""
            />
            <div>
              <div>Product name nhé Product name nhé Product name nhé</div>
              <div className="text-xl font-sans font-bold italic mt-2">
                VND 15,000,000
              </div>
              <div className="text-stone-700 text-base">Free shipping</div>
              <div className="text-red-600">36 sold</div>
            </div>
          </div>
        </NavLink>
        <NavLink>
          <div className="w-full">
            <img
              className="w-full h-[18.5rem]"
              src="/productsPic/vivid-blurred-colorful-background.jpg"
              alt=""
            />
            <div>
              <div>Product name nhé Product name nhé Product name nhé</div>
              <div className="text-xl font-sans font-bold italic mt-2">
                VND 15,000,000
              </div>
              <div className="text-stone-700 text-base">Free shipping</div>
              <div className="text-red-600">36 sold</div>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="w-full mt-6">
        <Pagination
          defaultCurrent={1}
          total={10}
          pageSize={1}
          align="center"
          size="default"
          colorBgTextHover
        />
      </div>
    </>
  );
};

export default Right;
