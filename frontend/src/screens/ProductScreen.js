import React from "react";

export default function ProductScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
