import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { GlobalContext } from "../../context/Global";

export default function Header() {
  const { cartLength, toggleCartVisibility } = useContext(GlobalContext);

  return (
    <header className="fixed top-0 left-0 h-[56px] w-full bg-orange-500 flex items-center justify-between px-6 text-white z-50">
      <ul className="flex gap-3">
        <li>Trang chủ</li>
        <li>Danh sách sản phẩm</li>
      </ul>
      <div onClick={toggleCartVisibility} className="relative cursor-pointer">
        <ShoppingCartOutlined className="text-[24px]" />
        <p className="bg-red-500 px-2 text-[12px] absolute top-[-10px] right-[-20px] rounded-lg hover:text-[14px] transition-all duration-75 ease-linear">
          {cartLength > 99 ? "99+" : cartLength}
        </p>
      </div>
    </header>
  );
}
