import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  const items = products.map((product) => <CartItem item={product} />);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
