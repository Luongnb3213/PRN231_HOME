import { Pagination } from "antd";
import ProductCard from "../CommonComponents/ProductCard";
import { useParams } from "react-router-dom";
import requestAPI from "../../customHook/callApi";
import { useEffect, useState } from "react";
import LoadingComponent from "../../Components/LoadingComponent";

const Right = () => {
  const params = useParams();
  let { parent, child } = params;
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(0);
  let [listProduct, setListProduct] = useState();
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetch = async () => {
      try {
        const data = await requestAPI(
          "Get",
          `https://kv7fckmg-4000.asse.devtunnels.ms/prn-product/api/Product/category/product?CategoryId=${
            child ? child : parent
          }&PageNumber=${page}&PageSize=8`
        );

        // console.log(data);
        setListProduct(data.response.items);
        setTotalPage(data.response.totalPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [page]);

  console.log(isLoading);

  const handleChangePage = (current) => {
    setPage(current);
  };

  // console.log(listProduct);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className={`w-full grid grid-cols-4 gap-4 gap-y-10`}>
        {listProduct?.map((product, index) => (
          <ProductCard key={index} productData={product} />
        ))}
      </div>
      <div className="w-full mt-6">
        <Pagination
          defaultCurrent={1}
          total={totalPage}
          pageSize={1}
          align="center"
          size="default"
          colorBgTextHover
          onChange={(current) => handleChangePage(current)}
        />
      </div>
    </>
  );
};

export default Right;
