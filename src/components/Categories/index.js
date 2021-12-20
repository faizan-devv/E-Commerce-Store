import React, { useEffect } from "react";
import Product from "../Products";
import styles from "./Categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../Redux/actions";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesItems = useSelector(
    (state) => state.Categories.categoriesItems
  );
  useEffect(() => {
    dispatch(allActions.FetchProductAction.fetchProducts());
    dispatch(allActions.FetchCategoriesAction.fetchCategories());
  }, [dispatch]);

  let categories = null;
  if (categoriesItems.length === 0) {
    categories = <Spinner></Spinner>;
  }

  if (categoriesItems.length >= 1) {
    categories = categoriesItems.map((category, index) => {
      return (
        <section className={`container ${styles.categorySection}`} key={index}>
          <h3 className={`text-uppercase ${styles.categoryTitle}`}>
            {category.name}
            <span>
              <Link to={{ pathname: `products/${category.name}` }}>
                view all products <i className="fa fa-arrow-right"></i>
              </Link>
            </span>
          </h3>
          <Product category={category.name} showall={false} />
        </section>
      );
    });
  }
  return <div className={styles.categoriesWrapper}>{categories}</div>;
};

export default Categories;
