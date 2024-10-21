import { Pagination } from "antd";
import ProductCard from "../CommonComponents/ProductCard";

const Right = () => {
  return (
    <>
      <div className={`w-full grid grid-cols-4 gap-4 gap-y-10`}>
        <ProductCard />
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
