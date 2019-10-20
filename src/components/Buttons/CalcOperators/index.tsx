import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  input_operator,
  store_firstOperand,
  show_result
} from "../../../redux/actionsCreators";
import { AppState } from "../../../redux/reducers/";
import styles from "./operators.module.scss";
import { performCalculation } from "../../../helpers/functions";

export interface Operator {
  operator: string;
}

const CalcOperator: FunctionComponent<Operator> = ({
  operator
}): JSX.Element => {
  const { firstOperand, displayValue, operation } = useSelector(
    (state: AppState) => state.display
  );
  const dispatch = useDispatch();

  const handleOperator = () => {
    let inputValue: number = parseFloat(displayValue);

    if (firstOperand === null) {
      dispatch(store_firstOperand(inputValue));
    }
    if (operation) {
      const result: number = performCalculation[operation](
        firstOperand,
        inputValue
      );
      dispatch(show_result(result));
    }
    dispatch(input_operator(operator));
  };

  return (
    <div className={styles.operator}>
      <button className={styles.operator_button} onClick={handleOperator}>
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
