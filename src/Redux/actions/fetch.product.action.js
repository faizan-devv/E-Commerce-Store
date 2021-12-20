const fetchProducts = (category) => async (dispatch) => {
  dispatch({ type: "FETCH_DATA" });
  try {
    const response = JSON.parse(localStorage.getItem("fakeAPI"));
    const productData = response.products;
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: productData });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error });
  }
};

const productAdded = (payload) => {
  return {
    type: "PRODUCT_ADDED",
    payload: payload,
  };
};

const fetchProductAction = {
  fetchProducts,
  productAdded,
};
export default fetchProductAction;
