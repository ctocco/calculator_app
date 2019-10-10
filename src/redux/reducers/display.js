const INITIAL_STATE = {
  displayValue: "",
  firstOperand: null,
  operation: null,
  waitingForSecondOperand: false
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_OPERAND":
      return {
        ...state,
        displayValue: state.displayValue + action.payload
      };
    case "INPUT_OPERATOR":
      return {
        ...state,
        operation: action.payload,
        waitingForSecondOperand: true
      };
    case "INPUT_DOT":
      return {
        ...state,
        displayValue: state.displayValue + action.payload
      };
    case "CLEAR_DISPLAY":
      return INITIAL_STATE;
    case "STORE_FIRSTOPERAND":
      return {
        ...state,
        firstOperand: action.payload
      };
    case "STORE_NEXT_VALUE":
      return {
        ...state,
        displayValue: action.payload,
        waitingForSecondOperand: false
      };
    case "SHOW_RESULT":
      return {
        ...state,
        displayValue: String(action.payload),
        firstOperand: action.payload
      };
    default:
      return state;
  }
};

export default displayReducer;
