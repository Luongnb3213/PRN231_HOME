import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

const DetailProduct = () => {
  return (
    <div className="w-full h-full grid grid-cols-12 gap-10">
      <div className="bg-green-500 col-span-8">
        <DetailLeft />
      </div>
      <div className="w-full col-span-4">
        <DetailRight />
      </div>
    </div>
  );
};

export default DetailProduct;
