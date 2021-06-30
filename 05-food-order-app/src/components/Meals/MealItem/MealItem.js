import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  const fPrice = `$${price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
