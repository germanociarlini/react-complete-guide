import { notificationActions } from "./notificationSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://redux-test-2ae73-default-rtdb.firebaseio.com/cart.json"
      );

      const data = await response.json();

      dispatch(cartActions.set(data));
    } catch (e) {
      dispatch(
        notificationActions.show({
          type: "error",
          title: "Error!",
          message: "Failed to fetch cart data.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    try {
      dispatch(
        notificationActions.show({
          type: "info",
          title: "Updating...",
          message: "Updating cart...",
        })
      );

      await fetch(
        "https://redux-test-2ae73-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      dispatch(
        notificationActions.show({
          type: "success",
          title: "Success!",
          message: "Successfully updated cart data.",
        })
      );
    } catch (e) {
      dispatch(
        notificationActions.show({
          type: "error",
          title: "Error!",
          message: "Failed to update cart data.",
        })
      );
    }
  };
};
