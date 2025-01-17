import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Utils/CartSlice";
const Cart = () => {
  const name = useSelector((state) => state.auth.firstName);
  const productArray = useSelector((state) => state.cart.CartProdutctsArray);
  const indexArray = useSelector((state) => state.cart.itemFrequency);
  console.log(productArray);
  let totalPrice = 0;
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <div>Hii {name}</div>
        {productArray.length === 0 ? (
          <>
            <div>Kuchh khrido bhi yaar </div>
            <div>Your cart is empty</div>
          </>
        ) : (
          //   JSX requires expressions, not statements. 
          // A for loop is a statement and cannot be used directly in JSX.
          (() => {
            let items = [];
            for (let i = 0; i < productArray.length; i++) {
              totalPrice += productArray[i].price * indexArray[i];
              items.push(
                <div key={i}>
                  <img src={productArray[i].imagelink} alt="photu was here" />
                  <div>{productArray[i].name}</div>
                  <div>{productArray[i].price}</div>
                  <div>{indexArray[i]} pc.</div>
                  <button onClick={() => handleRemove(productArray[i])}>
                    Remove
                  </button>
                </div>
              );
            }
            return items;
          })()
        )}
      </div>
      {productArray.length === 0 ? (
        <></>
      ) : (
        <>
          {" "}
          <div>you have to pay</div>
          {/* {} round off the tprice */}
          <div>{totalPrice} rupees</div>
          <button>pay now</button>
        </>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </>
  );
};

export default Cart;
