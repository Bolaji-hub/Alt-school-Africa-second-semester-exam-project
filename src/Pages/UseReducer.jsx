import { useState, useReducer } from "react";
import Counter from "../componenets/Counter";
import CounterVisibility from "../componenets/CounterVisibility";


const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "setValue":
      return { count: action.payload };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("unknown action");
  }
};

export default function () {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterVisibility>
      <Counter className="use-reducer"
        count={state.count}
        increment={() => dispatch({ type: "increment" })}
        decrement={() => dispatch({ type: "decrement" })}
        reset={() => dispatch({ type: "reset" })}
        setValue={(value) => dispatch({ type: "setValue", payload: value })}
      />
    </CounterVisibility>
  );
}
