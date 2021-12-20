import React from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Redux/actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const handleRemove = (product, index) => {
    let payload = { product: product, index: index };
    dispatch(allActions.CartAction.removeFromCart(payload));
  };

  const handleIncrement = (index) => {
    let payload = { index: index };
    console.log(payload);
    dispatch(allActions.CartAction.increaseQuantity(payload));
  };

  const handleDecrement = (index) => {
    let payload = { index: index };
    dispatch(allActions.CartAction.decreaseQuantity(payload));
  };

  return (
    <React.Fragment>
      {cart.cartItems.length >= 1 ? (
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <h1>Your Cart</h1>
            <Link to="/">Continue Shopping</Link>
          </div>

          <table>
            <thead className={styles.tableHeader}>
              <tr>
                <th className={styles.product}>Product</th>
                <th className={styles.price}>Price</th>
                <th className={styles.quantity}>Quantity</th>
                <th className={styles.total}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((product, index) => {
                return (
                  <tr>
                    <td className={styles.product}>
                      <div className={styles.productImage}>
                        <img src={product.imageUrl} alt={product.image} />
                      </div>
                      <div className={styles.productText}>
                        <span>{product.title}</span>
                        <button
                          onClick={() => {
                            handleRemove(product, index);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td className={styles.prrice}>
                      <span>${product.price}</span>
                    </td>
                    <td className={styles.quantity}>
                      <div className={styles.itemsCount}>
                        <button
                          onClick={() => {
                            handleDecrement(index);
                          }}
                        >
                          -
                        </button>
                        {/* <input type="text"></input> */}
                        <input type="number" value={product.quantity}></input>
                        <button
                          onClick={() => {
                            handleIncrement(index);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className={styles.total}>
                      <span>${product.price * product.quantity}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.cartFooter}>
            <div className={styles.cartSubtotal}>
              <span>
                <b>Subtotal :</b>
              </span>
              <span>${cart.price}</span>
            </div>
            <div className={styles.cartShippingRate}>
              <span>Tax included and shipping calculated at checkout</span>
            </div>
            <div className={styles.cartButtons}>
              <button className={styles.checkOutBtn}>
                <Link to="/checkout">CHECK OUT</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`text-center ${styles.cart}`}>
          <div className={styles.cartHeader}>
            <h1>Your Cart</h1>
            <p>Your cart is currently empty</p>
            <Link className="mt-4" to="/">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
