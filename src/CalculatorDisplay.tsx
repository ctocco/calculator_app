import React, { FunctionComponent, useState } from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector } from "react-redux";
import { TSExportAssignment } from "@babel/types";

const CalculatorDisplay = (): JSX.Element => {
  const result = useSelector(state => state.display);
  return <div className={styles.calculator_display}>{result}</div>;
};

export default CalculatorDisplay;
