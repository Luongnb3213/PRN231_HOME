import React from 'react';
import { Popover } from 'antd';
const Minicart = () => {
  const content = (
    <div className='max-w-96 min-w-72'>
      <h4 className="text-gray-400 text-2xl">Your cart is empty</h4> 
      <p className="text-xs py-6 text-gray-400">
      Time to start shopping!
      </p>
      {/* Content cart  */}
      <div className='flex flex-col gap-2'>
      <a href='https://example.com' className='text-center font-bold py-3 text-white bg-gray-300'>Checkout</a>
      <a href='https://example.com' className='text-center font-bold py-3 text-blue-400 bg-gray-300'>View Cart</a>
      </div>
      
    </div>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      placement="topRight"
      className="cursor-pointer"
    >
      Minicart
    </Popover>
  );
};

export default Minicart;
