import { Modal } from "antd";
import { useState } from "react";
const SellerDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDelete = () => {
    showModal();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className=" bg-white p-4 w-full flex my-1">
        <div className=" w-full flex">
          <img
            src="/productsPic/istockphoto-1349361409-612x612.jpg"
            className="w-20 h-20"
            alt=""
          />
          <div className="flex flex-col justify-evenly ml-4">
            <div>Product's name</div>
            <div>₫290.000</div>
          </div>
        </div>
        <div className="w-1/6 flex justify-evenly items-center text-2xl">
          <div className="cursor-pointer hover:scale-110 transition-all p-4 text-blue-600">
            <i class="fi fi-rr-edit"></i>
          </div>
          <div
            className="cursor-pointer hover:scale-110 transition-all p-4 text-red-600"
            onClick={handleDelete}
          >
            <i class="fi fi-rr-trash-xmark"></i>
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>You want to delete this product?</p>
      </Modal>
    </>
  );
};

export default SellerDetail;
