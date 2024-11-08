import { Pagination } from "antd";
import ProductCard from "../CommonComponents/ProductCard";
import { useParams } from "react-router-dom";
import requestAPI from "../../customHook/callApi";
import { useEffect, useState } from "react";
import LoadingComponent from "../../Components/LoadingComponent";

const Right = ({ page, onChangePage }) => {
  const params = useParams();
  let { parent, child } = params;
  let [totalPage, setTotalPage] = useState(0);
  let [listProduct, setListProduct] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetch = async () => {
      try {
        const data = await requestAPI(
          "Get",
          `/prn-product/api/Product/category/product?CategoryId=${
            child ? child : parent
          }&PageNumber=${page}&PageSize=8`
        );

        setListProduct(data.response.items);
        setTotalPage(data.response.totalPages);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [page, parent, child]);

  const handleChangePage = (current) => {
    onChangePage(current);
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      {listProduct.length === 0 && (
        <div className="font-sans text-center">There is no data</div>
      )}
      {listProduct.length !== 0 && (
        <>
          <div className={`w-full grid grid-cols-4 gap-4 gap-y-10`}>
            {listProduct?.map((product, index) => (
              <ProductCard key={index} productData={product} />
            ))}
          </div>

          <div className="w-full mt-6">
            <Pagination
              current={page}
              total={totalPage}
              pageSize={1}
              align="center"
              size="default"
              colorBgTextHover
              onChange={(current) => handleChangePage(current)}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Right;
