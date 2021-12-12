import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="1"
          title="Test"
          price={6}
          description="This is a product - amazing!"
        />
        <ProductItem
          id="2"
          title="Another Product"
          price={15}
          description="RONALDINHO SOCK SEEEERRRRRR"
        />
      </ul>
    </section>
  );
};

export default Products;
