const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: "FETCH_CATEGORIES",
  });
  try {
    const response = JSON.parse(localStorage.getItem("fakeAPI"));
    const categoriesData = response.categories;
    console.log("Categoreis::", categoriesData);
    dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categoriesData });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORIES_FAILURE", payload: error });
  }
};

const fetchCategoriesAction = {
  fetchCategories,
};
export default fetchCategoriesAction;
