import React, { useContext } from "react";
import { Card } from "antd";
import { GlobalContext } from "../../context/Global";
import ProductItem from "./ProductItem";
const { Meta } = Card;

export default function ListProduct() {
  const { products } = useContext(GlobalContext);

  return (
    <main className="px-12 pt-[56px]">
      <h3 className="text-center text-lg uppercase font-bold py-[24px]">
        Danh sách sản phẩm
      </h3>
      {/* Hiển thị danh sách sản phẩm */}
      <div className="grid-cols-5 grid gap-3">
        {products.map((pro) => {
          return <ProductItem product={pro} key={pro.id} />;
        })}
      </div>
    </main>
  );
}
