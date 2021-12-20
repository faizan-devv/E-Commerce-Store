import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";

const DetailPage = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const productDetails = useSelector(
    (state) => state.ProductsDetails.productDetails
  );
  const loading = useSelector((state) => state.ProductsDetails.loading);
  useEffect(() => {
    dispatch(
      allActions.fetchProductDetailsAction.fetchProductDetails(params.id)
    );
  }, [dispatch, params.id]);

  const handleAddToCart = () => {
    let payload = { product: productDetails, qty: quantity };
    dispatch(allActions.CartAction.addToCart(payload));
  };
  const handleBuyItNow = () => {
    let payload = { product: productDetails, qty: quantity };
    dispatch(allActions.CartAction.addToCart(payload));
    navigate("/checkout");
  };
  const getQuantity = (e) => {
    setQuantity(e.target.value);
  };

  let prodDetail = null;
  if (loading) {
    prodDetail = <Spinner></Spinner>;
  } else {
    prodDetail = (
      <div className={styles.container}>
        <div className="row justify-content-between">
          <div className="col-md-7">
            <div className={styles.Detail_page_images}>
              <div className={styles.Detail_image}>
                <img src={productDetails.imageUrl} alt="product img"></img>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <h2>{productDetails.title}</h2>
            <h4>${productDetails.price}</h4>
            <h5>
              Rating: {productDetails.rating.rate} <span></span>
            </h5>
            <span>Tax included for Pakistan</span>
            <div>
              <div className="form-group mt-3 mb-4">
                <label className="mb-2">Quantity</label>
                <input
                  className="form-control"
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    getQuantity(e);
                  }}
                />
              </div>
              <div className={styles.buttons}>
                {quantity >= 1 ? (
                  <button className={styles.FirstBtn} onClick={handleAddToCart}>
                    ADD TO CART
                  </button>
                ) : (
                  <button
                    className={styles.FirstBtn}
                    onClick={handleAddToCart}
                    disabled
                  >
                    ADD TO CART
                  </button>
                )}
                {quantity >= 1 ? (
                  <button className={styles.SecondBtn} onClick={handleBuyItNow}>
                    BUY IT NOW
                  </button>
                ) : (
                  <button
                    className={styles.SecondBtn}
                    onClick={handleBuyItNow}
                    disabled
                  >
                    BUY IT NOW
                  </button>
                )}
              </div>
            </div>
            <h6>Details</h6>
            <p className={styles.details}>{productDetails.description}</p>
          </div>
        </div>
      </div>
    );
  }
  return <div className={styles.Detail_page}>{prodDetail}</div>;
};

export default DetailPage;
