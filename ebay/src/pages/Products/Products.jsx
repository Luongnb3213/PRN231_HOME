import Right from "./Right";
import Left from "./Left";

const Products = () => {
  return (
    <div className="w-full h-full">
      <img
        src="/productsPic/vivid-blurred-colorful-background.jpg"
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="mt-6 grid grid-cols-6">
        <div className="col-span-1">
          <Left />
        </div>
        <div className="col-span-5">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Products;
