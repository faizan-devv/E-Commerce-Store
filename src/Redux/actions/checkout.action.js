const getUser = (userObj) => {
  return {
    type: "FETCH_USER",
    payload: userObj,
  };
};

const chekoutAction = {
  getUser,
};
export default chekoutAction;
