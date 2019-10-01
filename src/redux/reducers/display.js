const INITIAL_STATE = {
  initialValue: [],
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: ""
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_OPERAND":
      return {
        ...state,
        initialValue: [...state.initialValue, action.payload]
      };
    case: "INPUT_OPERATOR" {
      return {
        ...state, 
        firstOperand: initialValue
      }
    }
    case "CLEAR_DISPLAY":
      return INITIAL_STATE;
    case "SHOW_SUM":
      return state;
    default:
      return state;
  }
};

export default displayReducer;
