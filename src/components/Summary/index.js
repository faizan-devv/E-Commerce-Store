import React, { useState } from "react";
import styles from "./Summary.module.css";
import { useSelector, useDispatch } from "react-redux";
import MyVerticallyCenteredModal from "../Modal";
import allActions from "../../Redux/actions";

const Summary = () => {
  const dispatch = useDispatch();
  const handleConfirm = () => {
    dispatch(allActions.CartAction.emptyCart());
    setModalShow(true);
  };
  const [modalShow, setModalShow] = useState(false);
  const cart = useSelector((state) => state.Cart);
  const userSummary = useSelector((state) => state.User.user);
  return (
    <>
      <div className="container">
        <div className={styles.cartWrapper}>
          <div className={styles.cartLeft}>
            <h3 className="text-left">Review Order</h3>
            <div className={`col-12 ${styles.contentBox}`}>
              <div className={styles.reviewRow}>
                {console.log(userSummary)}
                <div className={styles.reviewTitle}>contact</div>
                <div className={styles.reviewInfo}>{userSummary.email}</div>
              </div>
              <div className={`${styles.reviewRow} ${styles.shipingRow}`}>
                <div className={styles.reviewTitle}>ship to</div>
                <div className={styles.shipAdddress}>
                  <div className={styles.reviewInfo}>
                    {userSummary.firstName} {userSummary.lastName}
                  </div>
                  <div className={styles.reviewInfo}>{userSummary.city}</div>
                  <div className={styles.reviewInfo}>{userSummary.address}</div>
                  <div className={styles.reviewInfo}>{userSummary.phone}</div>
                </div>
              </div>
              <div className={styles.reviewRow}>
                <div className={styles.reviewTitle}>Shipping Method</div>
                <div className={styles.reviewInfo}>
                  <p>
                    standard: <b>Free</b>
                  </p>
                  <p className="text-small">no other method available</p>
                </div>
              </div>
            </div>
            <div className={`col-12 ${styles.contentBox}`}>
              <div className={styles.reviewRow}>
                <div className={styles.reviewTitle}>subtotal</div>
                <div className={styles.reviewInfo}> ${cart.price}</div>
              </div>
              <div className={styles.reviewRow}>
                <div className={styles.reviewTitle}>shiping</div>
                <div className={styles.reviewInfo}>free</div>
              </div>
              <div className={styles.reviewRow}>
                <div className={`text-dark ${styles.reviewTitle}`}>Total</div>
                <div className={`fs-3 ${styles.reviewInfo}`}>
                  {" "}
                  ${cart.price}
                </div>
              </div>
            </div>
            <div className={styles.shippingBtn}>
              <button type="button" variant="primary" onClick={handleConfirm}>
                Confirm order
              </button>
            </div>
          </div>

          <div className={styles.cartRight}>
            <table>
              <thead>
                {cart.cartItems.map((cartItem) => {
                  return (
                    <tr>
                      <th scope="col" colSpan="1">
                        <div className={styles.image}>
                          <div className={styles.thumbnail}>
                            <img
                              alt="Apricot Midi Skirt"
                              className="product-thumbnail__image"
                              src={cartItem.imageUrl}
                            />
                          </div>
                          <span
                            className="product-thumbnail__quantity"
                            aria-hidden="true"
                          >
                            {cartItem.quantity}
                          </span>
                        </div>
                      </th>
                      <th className={`px-4 ${styles.second}`} scope="row">
                        <span>{cartItem.title}</span>
                        <span className={styles.small}>Small</span>
                      </th>
                      <td colSpan="2" className={`${styles.subTotal}`}>
                        ${cartItem.price}
                      </td>
                    </tr>
                  );
                })}
              </thead>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td colSpan="2" className={`${styles.subTotal}`}>
                    ${cart.price}
                  </td>
                </tr>
                <tr>
                  <td className="pt-0">Shipping</td>
                  <td colSpan="2" className={`pt-0 ${styles.subTotal}`}>
                    free
                  </td>
                </tr>
              </tbody>
              <tfoot className={styles.totalLineTableFooter}>
                <tr className={styles.totalLine}>
                  <th>
                    <span>Total</span>
                  </th>
                  <th scope="col" colSpan="2" className={`${styles.subTotal}`}>
                    ${cart.price}
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        ></MyVerticallyCenteredModal>
      </div>

      {/* Modal */}
    </>
  );
};

export default Summary;
