import DetailRight from "./DetailRight";

const DetailProduct = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-28 mt-8">
      <div className="bg-green-500 w-full h-10 col-span-7"></div>
      <div className="bg-pink-500 w-full col-span-5">
        <DetailRight />
      </div>
    </div>
  );
};

export default DetailProduct;
