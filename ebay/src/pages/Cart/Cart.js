import React from 'react';
import { Card, Button } from 'antd';
const Cart = () => {
  return (
    <div className="my-10 grid grid-cols-12 gap-5">
    {/* Cart Item */}
    <div className="col-span-8">
      <Card className="rounded-lg shadow-md">
        <div className="flex items-center">
          {/* Product Image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-24 h-24 object-cover rounded-lg mr-4"
          />
          {/* Product Info */}
          <div className="flex-grow">
            <h3 className="font-semibold text-gray-800">Nike Air Tech Challenge II Hot Lava 2024</h3>
            <p className="text-gray-500">Size 4 | New with box</p>
            <p className="text-gray-500">eBay International Shipping</p>
          </div>
          {/* Price & Qty */}
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-800">$170.00</p>
            <p className="text-sm text-gray-500">+ $92.39 Shipping</p>
            <p className="text-sm text-gray-500">Qty: 1</p>
            {/* Save & Remove */}
            <div className="mt-2">
              <Button type="link" className="text-sm text-gray-500">Save for later</Button>
              <Button type="link" className="text-sm text-red-500">Remove</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>

    {/* Checkout Summary */}
    <div className="col-span-4">
      <Card className="rounded-lg shadow-md">
        <div className="flex justify-between">
          <span>Item (1)</span>
          <span>$170.00</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Shipping to 100000</span>
          <span>$92.39</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Subtotal</span>
          <span>$262.39</span>
        </div>
        <Button type="primary" className="w-full mt-5 py-6 bg-blue-600 font-bold rounded-3xl">Go to checkout</Button>
        <p className="text-center mt-3 text-sm text-gray-500">Purchase protected by eBay Money Back Guarantee</p>
      </Card>
    </div>
  </div>
  )
}

export default Cart
