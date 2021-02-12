import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, change } from "./slice";
import { updateField } from "./testSlice";

export default function Redux() {
  const counter = useSelector((state) => state.counter);
  const fruit = useSelector((state) => state.apple);
  const inputData = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div>counter: {counter}</div>
      <div>Some {fruit}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(change())}>APPLE SLICE!</button>
      <div>
        <input
          value={inputData}
          onChange={e => dispatch(updateField(e.target.value))}
        />
      </div>
      <div>{inputData}</div>
    </>
  );
}
