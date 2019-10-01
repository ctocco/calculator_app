import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input_dot } from "../../redux/actionsCreators";

export interface Dot {
  dot: string;
}

const Dot: FunctionComponent<Dot> = ({ dot }): JSX.Element => {
  const dispatch = useDispatch();
  const display = useSelector((state: object) => state.display.hasDot);

  return (
    <div className={dot}>
      <button onClick={!display ? (): void => dispatch(input_dot(dot)) : null}>
        {dot}
      </button>
    </div>
  );
};

export default Dot;
