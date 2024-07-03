import React, { createContext, useState } from "react";
import Header from "../layouts/header/Header";
import ListProduct from "../pages/product/ListProduct";
import ProductJson from "../data.json";
import ListCart from "../pages/cart/ListCart";

// Tạo ngữ cảnh
export const GlobalContext = createContext();

export default function Global() {
  // Lấy dữ liệu carts trên localStorage
  const [carts, setCarts] = useState(() => {
    const cartLocals = JSON.parse(localStorage.getItem("carts")) || [];
    return cartLocals;
  });

  /**
   * Hàm lưu và cập nhật dữ liệu
   * @param {*} key Key của dữ liệu trên local
   * @param {*} data Dữ liệu cần lưu
   */
  const handleSaveData = (key, data) => {
    // Cập nhật vào state
    setCarts(data);

    // lưu vào local
    localStorage.setItem(key, JSON.stringify(data));
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    const findIndexProduct = carts.findIndex(
      (cart) => cart.product.id === product.id
    );

    if (findIndexProduct === -1) {
      const newCart = {
        id: Math.ceil(Math.random() * 10000000),
        product: product,
        quantity: 1,
      };
      // Thêm sản phẩm vào trong giỏ hàng
      const updateCart = [...carts, newCart];

      // Cập nhật vào state
      setCarts(updateCart);

      // lưu vào local
      localStorage.setItem("carts", JSON.stringify(updateCart));
    } else {
      const newCartUpdate = [...carts];
      // Tăng số lượng
      newCartUpdate[findIndexProduct].quantity =
        newCartUpdate[findIndexProduct].quantity + 1;

      // Cập nhật vào state
      setCarts(newCartUpdate);

      // lưu vào local
      localStorage.setItem("carts", JSON.stringify(newCartUpdate));
    }
  };

  // Hiển thị cart
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  // Cập nhật số lượng giỏ hàng

  //  Tăng
  const handleIncrement = (id) => {
    const updatedCart = carts.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    handleSaveData("carts", updatedCart);
  };

  // Giảm
  const handleDecrement = (id) => {
    const updatedCart = carts
      .map((item) =>
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : // Xóa sản phẩm có số lượng là 1
              null
          : item
      )
      .filter((item) => item !== null);
    handleSaveData("carts", updatedCart);
  };

  // Xóa
  const handleRemove = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    handleSaveData("carts", updatedCart);
  };

  const dataGlobal = {
    products: ProductJson.products,
    carts,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleRemove,
    toggleCartVisibility,
    isCartVisible,
    cartLength: carts.reduce((total, cartItem) => total + cartItem.quantity, 0),
  };

  return (
    <>
      <GlobalContext.Provider value={dataGlobal}>
        <Header />
        <ListProduct />
        {isCartVisible && (
          <div className="">
            <ListCart />
          </div>
        )}
      </GlobalContext.Provider>
    </>
  );
}
