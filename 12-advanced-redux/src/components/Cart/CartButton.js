import { cartActions } from "../../store/cartSlice";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const calculateTotalItems = (products) => {
    return products.reduce((a, b) => a + b.quantity, 0);
  };
  const totalItems = useSelector((state) =>
    calculateTotalItems(state.cart.products)
  );

  const onClickHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
