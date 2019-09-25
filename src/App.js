import React from "react";
import styles from "./App.module.scss";
import CalculatorBody from "./CalculatorBody";

const App = () => {
  return (
    <div className={styles.appBackground}>
      <CalculatorBody />
    </div>
  );
};

export default App;
