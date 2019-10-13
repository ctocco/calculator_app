import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input_dot } from "../../../redux/actionsCreators";
import styles from "./Dot.module.scss";
import { AppState } from "../../../redux/reducers";

export interface Dot {
  dot: string;
}

const Dot: FunctionComponent<Dot> = ({ dot }) => {
  const dispatch = useDispatch();
  const calculator = useSelector((state: AppState) => state.display);

  const addDot = () => {
    if (calculator.displayValue.includes(".")) return;
    dispatch(input_dot(dot));
  };

  return (
    <div className={styles.dot}>
      <button className={styles.dot_button} onClick={addDot}>
        {dot}
      </button>
    </div>
  );
};

export default Dot;
