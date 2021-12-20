const fetchProductDetails = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_PRODUCT_DETAILS",
  });

  try {
    dispatch({
      type: "SET_LOADING_TRUE",
    });
    const response = JSON.parse(localStorage.getItem("fakeAPI"));
    const Products = response.products;
    const temp = Products.filter((prod) => {
      return id === prod.productID;
    });
    console.log("found product::", temp);
    const productDetails = temp[0];
    dispatch({
      type: "FETCH_PRODUCT_DETAILS_SUCCESS",
      payload: productDetails,
    });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCT_DETAILS_FAILURE", payload: error });
  }
};

const fetchProductDetailsAction = {
  fetchProductDetails,
};

export default fetchProductDetailsAction;
