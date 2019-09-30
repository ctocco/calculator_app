const displayReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "UPDATE_DISPLAY":
      return [...state, action.payload];
    case "SHOW_SUM":
      return state;
    default:
      return state;
  }
};

export default displayReducer;
