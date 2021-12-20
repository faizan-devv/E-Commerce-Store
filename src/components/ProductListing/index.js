import React, { useEffect } from "react";
import Product from "../Products";
import styles from "./ProductListing.module.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import allActions from "../../Redux/actions";

const ProductListing = () => {
  let params = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.FetchProductAction.fetchProducts(params.category));
  }, [dispatch, params.category]);

  return (
    <div className={`container ${styles.ProductListing}`}>
      <div className={`mb-3 ${styles.ProductListingTop}`}>
        <h2 className="mb-3">{params.category} </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <Product category={params.category} showall={true} />
    </div>
  );
};

export default ProductListing;
