const initialState = {
  response: {},
  categoriesList: [],
};

const CategoriesCRUD = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
      };

    case "ADD_CATEGORY_SUCCESS":
      return {
        ...state,
        response: {
          message: "category added successfully",
          status: action.payload,
        },
      };
    case "ADD_CATEGORY_FAILURE":
      return {
        ...state,
        response: { message: "Cannot add category !", status: action.payload },
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
      };

    case "UPDATE_CATEGORY_SUCCESS":
      return {
        ...state,
        response: {
          message: "category updated successfully",
          status: action.payload,
        },
      };
    case "UPDATE_CATEGORY_FAILURE":
      return {
        ...state,
        response: {
          message: "Cannot update category !",
          status: action.payload,
        },
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
      };

    case "DELETE_CATEGORY_SUCCESS":
      return {
        ...state,
        response: {
          message: "category deleted successfully",
          status: action.payload,
        },
      };
    case "DELETE_CATEGORY_FAILURE":
      return {
        ...state,
        response: {
          message: "Cannot delete category !",
          status: action.payload,
        },
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
      };

    case "GET_ALL_CATEGORIES_SUCCESS":
      console.log("in reddjf");
      console.log(action.payload);
      return {
        ...state,
        response: {
          message: "categories fetched successfully",
        },
        categoriesList: action.payload,
      };
    case "GET_ALL_CATEGORIES_FAILURE":
      return {
        ...state,
        response: { message: "Cannot Get categories !" },
      };
    default:
      return state;
  }
};

export default CategoriesCRUD;
