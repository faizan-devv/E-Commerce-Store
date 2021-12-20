import React from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import allActions from "../../Redux/actions";

const Product = (props) => {
  const dispatch = useDispatch();
  const productItems = useSelector((state) =>
    state.Products.productItems.filter((p) => p.category === props.category)
  );

  const handleAddToCart = (product) => {
    let payload = { product: product, qty: 1 };
    dispatch(allActions.CartAction.addToCart(payload));
    dispatch(allActions.FetchProductAction.productAdded(product));
  };
  let prod = null;
  if (productItems.length === 0) {
    prod = <Spinner></Spinner>;
  }

  if (productItems.length >= 1) {
    props.showall
      ? (prod =
          productItems &&
          productItems.map((product, index) => {
            return (
              <div className="col-md-3 col-6 product-div" key={index}>
                <div className={`card py-4 ${styles.product}`}>
                  <div className={styles.productImage}>
                    <img
                      src={product.imageUrl}
                      className={`img-fluid ${styles.cardImgTop}`}
                      alt={product.image}
                    />
                  </div>
                  <div className={styles.viewDetail}>
                    <Link
                      to={{ pathname: `/product-detail/${product.productID}` }}
                    >
                      View Detail
                    </Link>
                  </div>
                  <div className="card-body text-center pb-0 px-0">
                    <h6 className={`text-uppercase mb-1 ${styles.cardTitle}`}>
                      {product.title}
                    </h6>
                    <p className={styles.cardText}> {product.description}</p>
                    <div className={styles.cardBottom}>
                      <span className={styles.productPrize}>
                        {" "}
                        ${product.price}
                      </span>
                      <button
                        className={`btn ${styles.btnCart}`}
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }))
      : (prod =
          productItems &&
          productItems.slice(0, 4).map((product, index) => {
            return (
              <div className="col-md-3 col-6 product-div" key={index}>
                <div className={`card py-4 ${styles.product}`}>
                  <div className={styles.productImage}>
                    <img
                      src={product.imageUrl}
                      className={`img-fluid ${styles.cardImgTop}`}
                      alt={product.image}
                    />
                  </div>
                  <div className={styles.viewDetail}>
                    <Link
                      to={{ pathname: `/product-detail/${product.productID}` }}
                    >
                      View Detail
                    </Link>
                  </div>
                  <div className="card-body text-center pb-0 px-0">
                    <h6 className={`text-uppercase mb-1 ${styles.cardTitle}`}>
                      {product.title}
                    </h6>
                    <p className={styles.cardText}> {product.description}</p>
                    <div className={styles.cardBottom}>
                      <span className={styles.productPrize}>
                        {" "}
                        ${product.price}
                      </span>
                      {product.isAdded ? (
                        <button
                          className={`btn ${styles.btnCart}`}
                          onClick={() => {
                            handleAddToCart(product);
                          }}
                          disabled
                        >
                          {" "}
                          ADDED{" "}
                        </button>
                      ) : (
                        <button
                          className={`btn ${styles.btnCart}`}
                          onClick={() => {
                            handleAddToCart(product);
                          }}
                        >
                          {" "}
                          ADD TO CART{" "}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }));
  }

  return <div className={`row ${styles.productRow}`}>{prod}</div>;
};

export default Product;
