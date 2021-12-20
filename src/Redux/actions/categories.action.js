import EndPoints from "../../FakeApi";

const addCategory = (categoryData) => async (dispatch) => {
  dispatch({ type: "ADD_CATEGORY" });
  try {
    const response = await EndPoints.addNewCategory(categoryData);
    dispatch({ type: "ADD_CATEGORY_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "ADD_CATEGORY_FAILURE", payload: error });
  }
};
const updateCategory = (categoryData, id) => async (dispatch) => {
  dispatch({ type: "UPDATE_CATEGORY" });
  try {
    const response = await EndPoints.updateCategory(categoryData, id);
    dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "UPDATE_CATEGORY_FAILURE", payload: error });
  }
};

const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_CATEGORY" });
  try {
    const response = await EndPoints.deleteCategory(id);
    dispatch({ type: "DELETE_CATEGORY_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "DELETE_CATEGORY_FAILURE", payload: error });
  }
};

const getAllCategories = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_CATEGORIES" });
  try {
    const db = JSON.parse(localStorage.getItem("fakeAPI"));
    console.log("GOT ALL", db);
    dispatch({ type: "GET_ALL_CATEGORIES_SUCCESS", payload: db.categories });
  } catch (error) {
    dispatch({ type: "GET_ALL_CATEGORIES_FAILURE", payload: error });
  }
};

const CategoriesActions = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
export default CategoriesActions;
