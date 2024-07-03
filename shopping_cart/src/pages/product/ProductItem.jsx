import React, { useContext } from 'react';
import { GlobalContext } from "../../context/Global";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { Card,Button } from 'antd';
import { handleFormatMoney } from '../../ultils/formatData';


export default function ProductItem({product}) {
    const { handleAddToCart } = useContext(GlobalContext);
  return (
    <>
    {/* Hiển thị thông tin sản phẩm */}
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          style={{ maxHeight: 300, minHeight: 300 }}
          alt={product.productName}
          src={product.image}
        />
      }
    >
      <div className="text-center flex flex-col gap-2">
        {/* Tên sản phẩm */}
        <h3 className="font-semibold">{product.productName}</h3>
        {/* Giá */}
        <p>{handleFormatMoney(product.price)}</p>
        <Button onClick={() => handleAddToCart(product)} type="primary">
          <ShoppingCartOutlined/>Thêm vào giỏ hàng
        </Button>
      </div>
    </Card>
  </>
);
  
}
