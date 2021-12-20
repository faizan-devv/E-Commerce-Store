const initialState = {
  response: {},
  productsList: [],
};

const ProductsCRUD = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
      };

    case "ADD_PRODUCT_SUCCESS":
      return {
        ...state,
        response: {
          message: "product added successfully",
          status: action.payload,
        },
      };
    case "ADD_PRODUCT_FAILURE":
      return {
        ...state,
        response: { message: "Cannot add product !", status: action.payload },
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
      };

    case "UPDATE_PRODUCT_SUCCESS":
      return {
        ...state,
        response: {
          message: "product updated successfully",
          status: action.payload,
        },
      };
    case "UPDATE_PRODUCT_FAILURE":
      return {
        ...state,
        response: {
          message: "Cannot update product !",
          status: action.payload,
        },
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
      };

    case "DELETE_PRODUCT_SUCCESS":
      return {
        ...state,
        response: {
          message: "product deleted successfully",
          status: action.payload,
        },
      };
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        response: {
          message: "Cannot delete product !",
          status: action.payload,
        },
      };
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
      };

    case "GET_ALL_PRODUCTS_SUCCESS":
      console.log("in reddjf");
      console.log(action.payload);
      return {
        ...state,
        response: {
          message: "product fetched successfully",
        },
        productsList: action.payload,
      };
    case "GET_ALL_PRODUCTS_FAILURE":
      return {
        ...state,
        response: { message: "Cannot Get products !" },
      };
    default:
      return state;
  }
};

export default ProductsCRUD;
