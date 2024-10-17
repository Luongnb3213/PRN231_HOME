import DetailRight from "./DetailRight";

const DetailProduct = () => {
  return (
    <div className="w-full grid grid-cols-12 gap-16">
      <div className="bg-green-500 w-full h-10 col-span-7"></div>
      <div className="w-full col-span-5">
        <DetailRight />
      </div>
    </div>
  );
};

export default DetailProduct;
