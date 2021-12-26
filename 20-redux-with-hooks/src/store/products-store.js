import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: ({ products }, productId) => {
      const productIndex = products.findIndex(
        (product) => product.id === productId
      );
      const updatedProducts = [...products];
      const updatedIsFavorite = !updatedProducts[productIndex].isFavorite;
      updatedProducts[productIndex].isFavorite = updatedIsFavorite;
      return { products: updatedProducts };
    },
  };

  initStore(actions, {
    products: [
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
    ],
  });
};

export default configureStore;
