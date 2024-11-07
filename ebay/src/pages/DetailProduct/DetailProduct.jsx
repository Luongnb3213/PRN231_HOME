import { useParams } from "react-router-dom";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

const DetailProduct = () => {
  const params = useParams();
  console.log(params);

  // useEffect(() => {
  //   if (!productData.isBid) {
  //     const fetch = async () => {
  //       const data = await requestAPI(
  //         "Get",
  //         `https://kv7fckmg-4000.asse.devtunnels.ms/prn-product/get-product-detail-buy-now?productId=${productData.productID}`
  //       );
  //     };

  //     fetch();
  //   }
  // }, [productData]);
  return (
    <div className="w-full h-[35rem] grid grid-cols-12 gap-10">
      <div className="w-full col-span-8 h-full">
        <DetailLeft />
      </div>
      <div className="w-full col-span-4">
        <DetailRight />
      </div>
    </div>
  );
};

export default DetailProduct;
