import Right from "./Right";
import Left from "./Left";
import { ConfigProvider } from "antd";
import { useParams } from "react-router-dom";
import requestAPI from "../../customHook/callApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const [categoryState, setCategoryState] = useState();
  let [page, setPage] = useState(1);

  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      if (params.parent) {
        const data = await requestAPI(
          "GET",
          `/prn-product/api/Category/category/${params.parent}`,
          null
        );
        setCategoryState(data);
      }
    };
    fetch();
  }, []);

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
          src={categoryState?.response.categoryImage}
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="mt-6 grid grid-cols-6">
          <div className="col-span-1">
            <Left
              data={categoryState?.response.listChildCategory}
              idParent={categoryState?.response.categoryId}
              page={page}
              onChangePage={setPage}
            />
          </div>
          <div className="col-span-5">
            <Right page={page} onChangePage={setPage} />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Products;
