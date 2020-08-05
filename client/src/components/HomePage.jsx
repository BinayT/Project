import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logInOut } from "../actions";

export const HomePage = () => {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home Page</h1>
      {counter == 0 ? null : (
        <button onClick={() => dispatch(decrement())}>-</button>
      )}

      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />

      <button onClick={() => dispatch(logInOut())}>
        {isLogged ? "Hi User" : "Sign In"}
      </button>
      <br />
      {isLogged ? <p>Valueable data here</p> : null}
    </div>
  );
};
