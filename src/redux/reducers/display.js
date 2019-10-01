const INITIAL_STATE = {
  initialValue: [],
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: "",
  hasDot: false
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_OPERAND":
      return {
        ...state,
        initialValue: [...state.initialValue, action.payload]
      };
    case "INPUT_OPERATOR":
      return {
        ...state,
        firstOperand: state.initialValue,
        waitingForSecondOperand: true,
        operator: action.payload,
        hasDot: false
      };
    case "INPUT_DOT":
      return {
        ...state,
        initialValue: [...state.initialValue, action.payload],
        hasDot: true
      };
    case "CLEAR_DISPLAY":
      return INITIAL_STATE;
    case "SHOW_SUM":
      return state;
    default:
      return state;
  }
};

export default displayReducer;
