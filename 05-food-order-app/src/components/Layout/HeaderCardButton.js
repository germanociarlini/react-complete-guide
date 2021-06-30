import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const [isAnimating, setIsAnimating] = useState(false);
  const totalCartItems = cartContext.items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${isAnimating ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
