import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { clear_display } from "../../../redux/actionsCreators";
import styles from "./Clear.module.scss";

export interface Clear {
  clear: string;
}

const Clear: FunctionComponent<Clear> = ({ clear }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles.clear}>
      <button
        className={styles.clear_button}
        onClick={() => dispatch(clear_display())}
      >
        {clear}
      </button>
    </div>
  );
};

export default Clear;
