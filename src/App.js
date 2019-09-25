import React from "react";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appBackground}>
      <CalculatorBody />
    </div>
  );
}

export default App;
