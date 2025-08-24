import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, getCartData } from "../Utils/CartSlice";

const Cart = () => {
  const name = useSelector((state) => state.auth.firstName);
  const { items, status, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    // Here you would also dispatch a thunk to sync this change with the backend
    // dispatch(removeBackendItemThunk(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    // Here you would also dispatch a thunk to sync this change with the backend
    // dispatch(clearBackendCartThunk());
  };

  if (status === "loading") {
    return <div>Loading your cart...</div>;
  }

  if (status === "failed") {
    return <div>Error loading cart: {error.message}</div>;
  }

  // Calculate total price based on the unified items array
  const totalPrice = items.reduce((total, item) => {
    // 🚨 Add a check to ensure productId is not null before accessing its properties
    if (item.productId) {
      return total + item.productId.price * item.quantity;
    }
    return total;
  }, 0);

  return (
    <>
      <div>
        <div>Hii {name}</div>
        {items.length === 0 ? (
          <>
            <div>Kuchh khrido bhi yaar </div>
            <div>Your cart is empty</div>
          </>
        ) : (
          <div>
            {items.map(
              (item) =>
                // 🚨 Add a check here as well
                item.productId && (
                  <div key={item.productId._id}>
                    <img src={item.productId.imagelink} alt="photu was here" />
                    <div>{item.productId.name}</div>
                    <div>{item.productId.price}</div>
                    <div>{item.quantity} pc.</div>
                    <button onClick={() => handleRemove(item.productId._id)}>
                      Remove
                    </button>
                  </div>
                )
            )}
          </div>
        )}
      </div>
      {items.length > 0 && (
        <>
          <div>you have to pay</div>
          <div>{totalPrice.toFixed(2)} rupees</div>
          <button>pay now</button>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </>
  );
};

export default Cart;
