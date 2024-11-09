import { useParams } from "react-router-dom";
import ProductCard from "../../CommonComponents/ProductCard";
import Left from "../../Products/Left";
import { useEffect, useState } from "react";
import requestAPI from "../../../customHook/callApi";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);

  const param = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const dataProduct = await requestAPI(
        "GET",
        `/prn-product/get-product-of-seller?SellerId=${param.idSeller}&CategoryId=0&PageNumber=1&PageSize=10000`
      );
      setProducts(dataProduct.response);
      // console.log(dataProduct);
    };

    fetchProduct();
    const fetchCategory = async () => {
      const dataCategory = await requestAPI(
        "GET",
        `/prn-product/get-category-of-seller?sellerId=${param.idSeller}`
      );

      setCategory(dataCategory.response);
    };
    fetchCategory();
  }, [param]);
  // let categories = [
  //   "Radio Control",
  //   "Kid toys",
  //   "Action figures",
  //   "Doll & Bear",
  // ];
  return (
    <div className="mt-6 grid grid-cols-6">
      <div className="col-span-1">
        <Left data={categories} />
      </div>
      <div className="col-span-5 p-4">
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 rounded-full"
            src="/productsPic/istockphoto-1349361409-612x612.jpg"
            alt=""
          />
          <div>Shop's name</div>
        </div>
        <div className={`w-full grid grid-cols-4 gap-4 gap-y-10 mt-10`}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
export default Shop;
