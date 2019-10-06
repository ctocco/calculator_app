const INITIAL_STATE = {
  currentOperand: "",
  previousOperand: 0,
  operation: "",
  display: "",
  hasDot: false
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_OPERAND":
      return {
        ...state,
        currentOperand: [...state.currentOperand, action.payload]
      };
    case "INPUT_OPERATOR":
      return {
        ...state,
        currentOperand: [],
        previousOperand: parseInt(state.currentOperand.join(""), 10),
        operation: action.payload,
        hasDot: false
      };
    case "INPUT_DOT":
      return {
        ...state,
        currentOperand: [...state.currentOperand, action.payload],
        hasDot: true
      };
    case "CLEAR_DISPLAY":
      return INITIAL_STATE;
    case "SHOW_SUM":
      return {
        ...state,
        secondOperand: state.currentOperand
      };
    case "DISPLAY":
      return {
        ...state,
        display: state.currentOperand
      };
    default:
      return state;
  }
};

export default displayReducer;
