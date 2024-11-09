import { Modal } from 'antd';
import { useState } from 'react';
import LoadingComponent from '../../../Components/LoadingComponent';
import { useNavigate } from 'react-router-dom';
const SellerDetail = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleDelete = (e) => {
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

   const hanldeUpdate = (e) => { 
    navigate(`/seller/updateProducts/${e.currentTarget.dataset.id}`);
   }
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
            <div>{item.name}</div>
            <div>₫{item.price}</div>
          </div>
        </div>
        <div className="w-1/6 flex justify-evenly items-center text-2xl">
          <div onClick={hanldeUpdate} data-id={item.id} className="cursor-pointer hover:scale-110 transition-all p-4 text-blue-600">
            <i className="fi fi-rr-edit"></i>
          </div>
          <div
            className="cursor-pointer hover:scale-110 transition-all p-4 text-red-600"
            data-id={item.id}
            onClick={handleDelete}
          >
            <i className="fi fi-rr-trash-xmark"></i>
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
