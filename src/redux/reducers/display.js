const INITIAL_STATE = {
  initialValue: [],
  firstOperand: null,
  secondOperand: null,
  sum: null,
  waitingForSecondOperand: false,
  operator: "",
  hasDot: false
};

const displayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT_OPERAND":
      return {
        ...state,
        initialValue: [
          ...state.initialValue,
          state.firstOperand ? state.firstOperand : action.payload
        ],
        waitingForSecondOperand: false
      };
    case "INPUT_OPERATOR":
      return {
        ...state,
        firstOperand: parseInt(state.initialValue.join(""), 10),
        secondOperand: state.firstOperand ? state.firstOperand : null,
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
      return {
        ...state,
        secondOperand: state.initialValue
      };
    default:
      return state;
  }
};

export default displayReducer;
