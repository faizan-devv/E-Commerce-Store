const addToCart = (payload) => {
  console.log("In action");
  return {
    type: "add",
    payload: payload,
  };
};
const removeFromCart = (payload) => {
  return {
    type: "remove",
    payload: payload,
  };
};

const increaseQuantity = (payload) => {
  return {
    type: "increase",
    payload: payload,
  };
};

const decreaseQuantity = (payload) => {
  return {
    type: "decrease",
    payload: payload,
  };
};
const emptyCart = () => {
  console.log("in action empty");
  return {
    type: "empty",
  };
};

const cartAction = {
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  increaseQuantity: increaseQuantity,
  decreaseQuantity: decreaseQuantity,
  emptyCart: emptyCart,
};
export default cartAction;
