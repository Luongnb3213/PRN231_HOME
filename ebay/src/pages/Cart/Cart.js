import React, { useState } from 'react';
import { Card, Button, Checkbox } from 'antd';

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const items = [
    {
      id: 1,
      name: 'Nike Air Tech Challenge II Hot Lava 2024',
      size: 'Size 4 | New with box',
      shipping: 'eBay International Shipping',
      price: 170.00,
      shippingPrice: 92.39,
      quantity: 1,
    },
    // Thêm các sản phẩm khác nếu cần
  ];

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      setSelectedItems(items.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const isChecked = (id) => selectedItems.includes(id);

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      if (isChecked(item.id)) {
        return total + item.price + item.shippingPrice;
      }
      return total;
    }, 0);
  };

  return (
    <div className="my-10 grid grid-cols-12 gap-5">
      {/* Cart Items */}
      <div className="col-span-8">
        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
            className='scale-150 pl-8 font-medium'
        >
          Select all
        </Checkbox>

        {items.map((item) => (
          <Card key={item.id} className="rounded-lg shadow-md my-4">
            <div className="flex items-center">
              <Checkbox
                checked={isChecked(item.id)}
                onChange={() => handleSelectItem(item.id)}
                className='mr-8 scale-150 '
              />
              <div className=''>
                <div className=' py-2 font-medium text-sm rounded-t-lg'>Seller: Yung boi si tinh</div>
                {/* Product Image */}
                <img
                  src="https://i.ebayimg.com/images/g/jR4AAOSw2ehm2yUr/s-l225.webp"
                  alt="Product"
                  className="w-28 h-28  object-cover rounded-lg mr-4"
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500">{item.size}</p>
                <p className="text-gray-500">{item.shipping}</p>
              </div>
              {/* Price & Qty */}
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">+ ${item.shippingPrice.toFixed(2)} Shipping</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                {/* Save & Remove */}
                <div className="mt-2">
                  <Button type="link" className="text-sm text-gray-500">Save for later</Button>
                  <Button type="link" className="text-sm text-red-500">Remove</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Checkout Summary */}
      <div className="col-span-4">
        <Card className="rounded-lg shadow-md">
          <div className="flex justify-between">
            <span>Selected items ({selectedItems.length})</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <Button type="primary" className="w-full mt-5 py-6 bg-blue-600 font-bold rounded-3xl">
            Go to checkout
          </Button>
          <p className="text-center mt-3 text-sm text-gray-500">Purchase protected by eBay Money Back Guarantee</p>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
