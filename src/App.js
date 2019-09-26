import React from "react";
import styles from "./App.module.scss";
import CalculatorBody from "./CalculatorBody";
import CalculatorDisplay from "./CalculatorDisplay";

const App = () => {
  return (
    <div className={styles.calculator}>
      <CalculatorDisplay />
      <CalculatorBody />
    </div>
  );
};

export default App;
