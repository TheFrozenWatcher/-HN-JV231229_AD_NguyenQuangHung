import React, { useContext } from "react";
import { GlobalContext } from "../../context/Global";
import CartItem from "./CartItem";
import { handleFormatMoney } from "../../ultils/formatData";

const ListCart = () => {
  const { carts, handleIncrement, handleDecrement, handleRemove } = useContext(GlobalContext);

  const getTotalAmount = () => {
    return carts.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div className="fixed top-14 right-0 w-full md:w-1/3 shadow-lg list-cart p-4 bg-black text-white">
      <h2 className="border-b pb-2">Giỏ hàng hiện tại</h2>
      <div className="max-h-96 overflow-auto mt-2">
        {/* Danh sách các sản phẩm trong giỏ hàng */}
        {carts.length > 0 ? (
          <>
            {carts.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onRemove={handleRemove}
              />
            ))}
          </>
        ) : (
          <p className="text-center font-bold text-lg text-gray-500">Chưa có sản phẩm trong giỏ hàng</p>
        )}
      </div>
      <div className="total-amount text-left text-white mt-44 border-t pt-1">
        {/* Hiện tổng tiền */}
        <p className="text-lg font-semibold">
          Tổng: {handleFormatMoney(getTotalAmount())}
        </p>
      </div>
    </div>
  );
};

export default ListCart;
