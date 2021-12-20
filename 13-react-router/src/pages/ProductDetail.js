import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <h4>{productId}</h4>
    </section>
  );
}
