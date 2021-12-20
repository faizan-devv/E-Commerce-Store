const initialState = {
  productItems: [],
};

const Products = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
      };
    case "PRODUCT_ADDED":
      let temp1 = [...state.productItems];
      for (let i = 0; i < temp1.length; i++) {
        if (temp1[i].productID === action.payload.productID) {
          temp1[i].isAdded = true;
        }
      }
      return {
        ...state,
        productItems: temp1,
      };
    case "FETCH_POSTS_SUCCESS":
      const temp = [];
      for (let i = 0; i < action.payload.length; i++) {
        const obj = {
          ...action.payload[i],
          isAdded: false,
        };
        temp.push(obj);
      }
      return {
        ...state,
        productItems: [...temp],
      };
    default:
      return state;
  }
};

export default Products;
