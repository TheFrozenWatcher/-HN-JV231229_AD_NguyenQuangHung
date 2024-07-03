import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { handleFormatMoney } from "../../ultils/formatData";

const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className="cart-item text-sm text-white flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex items-center gap-4 border-white">
        {/* Hình ảnh */}
        <div className="p-px bg-white rounded-full">
          <img
            className="w-10 h-10 rounded-full"
            src={item.product.image}
            alt={item.product.productName}
          />
        </div>
        {/* Tên */}
        <div>
          <h4 className="text-white font-semibold">
            {item.product.productName}
          </h4>
        </div>
      </div>
      <div className="cart-item-actions flex gap-2 items-center">
        {/* Tăng số lượng */}
        <button
          onClick={() => onIncrement(item.id)}
          className="border border-white text-white px-2 py-1 rounded hover:bg-green-600"
        >
          +
        </button>
        {/* Hiển thị số lượng hiện tại */}
        <p className="text-gray-500">{item.quantity}</p>
        {/* Giảm số lượng */}
        <button
          onClick={() => onDecrement(item.id)}
          className="border border-white text-white px-2 py-1 rounded hover:bg-red-600"
        >
          -
        </button>
        {/* Xóa khỏi giỏ hàng */}
        <button
          onClick={() => onRemove(item.id)}
          className=" text-white px-2 py-1 rounded hover:bg-gray-600"
        >
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
