import { cartActions } from "../../store/cartSlice";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) => state.cart.totalItems);

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
