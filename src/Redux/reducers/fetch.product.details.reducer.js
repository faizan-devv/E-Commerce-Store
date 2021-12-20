const initialState = {
    productDetails: {},
    loading:true
  };
  
  const ProductsDetails = (state = initialState, action) => {
    switch (action.type) {

      case "FETCH_PRODUCT_DETAILS":
        return {
          ...state,
        };
        case "SET_LOADING_TRUE":
          return {
            ...state,
            loading:true
          };
      case "FETCH_PRODUCT_DETAILS_SUCCESS":
        return {
          ...state,
          productDetails: action.payload,
          loading:false
        };
      case 'FETCH_PRODUCT_DETAILS_FAILURE':
          return{
              ...state,
              productDetails: action.payload,
            loading:true

          }
      default:
        return state;
    }
  };
  
  export default ProductsDetails;
  