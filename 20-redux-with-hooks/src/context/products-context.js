import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export default (props) => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = (productId) => {
    setProducts((currentProducts) => {
      const productIndex = currentProducts.findIndex(
        (product) => product.id === productId
      );
      const updatedProducts = [...currentProducts];
      const updatedIsFavorite = !updatedProducts[productIndex].isFavorite;
      updatedProducts[productIndex].isFavorite = updatedIsFavorite;
      return updatedProducts;
    });
  };

  const value = {
    products,
    toggleFav,
  };

  return (
    <ProductsContext.Provider value={value}>
      {props.children}
    </ProductsContext.Provider>
  );
};
