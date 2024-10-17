import React from 'react';
import { Popover } from 'antd';

const Minicart = () => {
  const content = (
    <div className='max-w-96 min-w-72'>
      <div className="flex flex-col items-center justify-center py-3 bg-gray-100 border-b border-gray-300">
        <h2 className="text-xl font-semibold">Shopping cart</h2>
        <p className="text-sm text-gray-600 mt-1">
          Something went wrong with one or more of your items,
          <a href="#" className="text-blue-500 underline"> view cart</a> for detail.
        </p>
      </div>
      <p className="text-xs py-6 text-gray-400">Time to start shopping!</p>
      
      {/* Content cart */}
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center border-b pb-2'>
          <img src='https://i.ebayimg.com/images/g/sq0AAOSwGC9ePBHK/s-l640.jpg' alt='Creed Himalaya' className='w-16 h-16'/>
          <div className='flex-1 ml-2'>
            <p className='font-bold'>Creed Himalaya 3.3 Oz.</p>
            <p className='text-xs text-gray-500'>$429.99</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-xs text-gray-500 mb-1'>Quantity: 1</p>
            <button className='text-blue-500'>
              <i className="fi fi-tr-trash-xmark"></i>
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center border-b pb-2'>
          <img src='https://i.ebayimg.com/00/s/MTQ1MFgxNjAw/z/jR4AAOSw2ehm2yUr/$_12.JPG?set_id=880000500F' alt='Nike Air Tech Challenge II' className='w-16 h-16'/>
          <div className='flex-1 ml-2'>
            <p className='font-bold'>Nike Air Tech Challenge II</p>
            <p className='text-xs text-gray-500'>$170.00</p>
            <p className='text-xs text-red-500'>Additional charge: $92.39</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-xs text-gray-500 mb-1'>Quantity: 1</p>
            <button className='text-blue-500'>
              <i className="fi fi-tr-trash-xmark"></i>
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center border-t pt-2'>
          <p className='text-base font-bold'>Total: $692.38</p>
        </div>
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
      className="cursor-pointer text-xs"
    >
      Minicart
    </Popover>
  );
};

export default Minicart;
