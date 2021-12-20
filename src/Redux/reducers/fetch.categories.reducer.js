const initialState = {
  categoriesItems: [],
  error: null,
};

const Categories = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
      };

    case "FETCH_CATEGORIES_SUCCESS":
      console.log("In Sucess");
      return {
        ...state,
        categoriesItems: action.payload,
      };

    case "FETCH_CATEGORIES_FAILURE":
      return {
        ...state,
        categoriesItems: action.payload,
      };

    default:
      return state;
  }
};

export default Categories;
