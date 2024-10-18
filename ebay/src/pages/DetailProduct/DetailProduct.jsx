import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";

const DetailProduct = () => {
  return (
    <div className="w-full max-h-[35rem] grid grid-cols-12 gap-10">
      <div className="w-full col-span-8">
        <DetailLeft />
      </div>
      <div className="w-full col-span-4">
        <DetailRight />
      </div>
    </div>
  );
};

export default DetailProduct;
