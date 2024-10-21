import Right from "./Right";
import Left from "./Left";
import { ConfigProvider } from "antd";

const Products = () => {
  let categories = [
    "Radio Control",
    "Kid toys",
    "Action figures",
    "Doll & Bear",
  ];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#191919",
          colorBgTextHover: "#1677ff",
        },
      }}
    >
      <div className="w-full h-full">
        <img
          src="/productsPic/vivid-blurred-colorful-background.jpg"
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="mt-6 grid grid-cols-6">
          <div className="col-span-1">
            <Left data={categories} />
          </div>
          <div className="col-span-5">
            <Right />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Products;
