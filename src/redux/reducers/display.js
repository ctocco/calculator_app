const INITIAL_STATE = {
  currentOperand: "",
  previousOperand: 0,
  operation: "",
  display: "",
  sum: null,
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
    case "SUM":
      return {
        ...state,
        sum: action.payload
      };
    case "SHOW_SUM":
      return {
        ...state,
        display: state.sum,
        currentOperand: "",
        previousOperand: 0,
        operation: ""
      };
    case "DISPLAY":
      return {
        ...state,
        display: state.sum ? action.payload : state.currentOperand
      };
    default:
      return state;
  }
};

export default displayReducer;
