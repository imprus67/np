"use client";

import { ProductWithRelations } from "@/@types/prisma";
import React from "react";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  return (
    <>
      <div>{product.name}</div>
      <div>{product.id}</div>
      <div>
        {product.items.map((item) => (
          <div key={item.id}>{item.price}</div>
        ))}
        <img src={product.imageUrl} />
      </div>
    </>
  );
};
