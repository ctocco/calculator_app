import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { input_dot } from "../../../redux/actionsCreators";
import styles from "./Dot.module.scss";

const Dot = ({ dot }) => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.display.hasDot);

  return (
    <div className={styles.dot}>
      <button
        className={styles.dot_button}
        onClick={!display ? () => dispatch(input_dot(dot)) : null}
      >
        {dot}
      </button>
    </div>
  );
};

export default Dot;
