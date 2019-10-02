// first we type check the payloads in the action creators

export interface Operand {
  operand: string;
}

export interface Operator {
  operator: string;
}

export interface Dot {
  dot: string;
}

export interface Sum_Total {
  sum_total: string;
}

// then we want to type check the reducers

export interface DisplayState {
  initialValue: string[];
  firstOperand: number;
  waitingForSecondOperand: boolean;
  operator: string;
  hasDot: boolean;
}

// we can then export the actions just as they are

export const INPUT_OPERAND = "INPUT_OPERAND";
export const INPUT_OPERATOR = "INPUT_OPERATOR";
export const INPUT_DOT = "INPUT_DOT";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SHOW_SUM = "SHOW_SUM";

// after we are checking the action creators
// the payload should come from the first interfaces

interface input_operandAction {
  type: typeof INPUT_OPERAND;
  payload: Operand;
}

interface input_operatorAction {
  type: typeof INPUT_OPERAND;
  payload: Operator;
}

interface input_dot {
  type: typeof INPUT_DOT;
  payload: Dot;
}

export type displayActionTypes =
  | input_operandAction
  | input_operatorAction
  | input_dot;
