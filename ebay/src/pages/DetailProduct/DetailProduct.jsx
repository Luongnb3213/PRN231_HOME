import { useParams } from "react-router-dom";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import { useEffect, useState } from "react";
import requestAPI from "../../customHook/callApi";
import LoadingComponent from "../../Components/LoadingComponent";

const DetailProduct = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (params.idProduct) {
      const fetch = async () => {
        try {
          const data = await requestAPI(
            "Get",
            `https://kv7fckmg-4000.asse.devtunnels.ms/prn-product/get-product-detail-buy-now?productId=${params.idProduct}`
          );
          setProductDetail(data);
        } finally {
          setIsLoading(false);
        }
      };

      fetch();
    }
  }, [params]);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className="w-full h-[35rem] grid grid-cols-12 gap-10">
        <div className="w-full col-span-8 h-full">
          <DetailLeft />
        </div>
        <div className="w-full col-span-4">
          <DetailRight productDetail={productDetail?.response} />
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
