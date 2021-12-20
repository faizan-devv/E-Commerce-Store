import EndPoints from "../../FakeApi";

const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: "ADD_PRODUCT" });
  try {
    const response = await EndPoints.addNewProduct(productData);
    dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "ADD_PRODUCT_FAILURE", payload: error });
  }
};
const updateProduct = (productData, id) => async (dispatch) => {
  dispatch({ type: "UPDATE_PRODUCT" });
  try {
    const response = await EndPoints.updateProduct(productData, id);
    dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "UPDATE_PRODUCT_FAILURE", payload: error });
  }
};

const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_PRODUCT" });
  try {
    const response = await EndPoints.deleteProduct(id);
    dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "DELETE_PRODUCT_FAILURE", payload: error });
  }
};

const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_PRODUCTS" });
  try {
    const db = JSON.parse(localStorage.getItem("fakeAPI"));
    console.log("GOT ALL", db);
    dispatch({ type: "GET_ALL_PRODUCTS_SUCCESS", payload: db.products });
  } catch (error) {
    dispatch({ type: "GET_ALL_PRODUCTS_FAILURE", payload: error });
  }
};

const ProductActions = {
  addProduct,
  updateProduct,
  getAllProducts,
  deleteProduct,
};
export default ProductActions;
