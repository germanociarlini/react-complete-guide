import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/1">Book</Link>
        </li>
        <li>
          <Link to="/products/2">Cars</Link>
        </li>
        <li>
          <Link to="/products/3">Movies</Link>
        </li>
        <li>
          <Link to="/products/4">Courses</Link>
        </li>
      </ul>
    </section>
  );
}
