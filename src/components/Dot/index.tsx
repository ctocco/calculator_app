import React, { FunctionComponent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update_display } from "../../redux/actionsCreators";

export interface Clear {
  dot: string;
}

const Clear: FunctionComponent<Clear> = ({ dot }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={(): void => dispatch(update_display(dot))}>{dot}</button>
    </div>
  );
};

export default Clear;
