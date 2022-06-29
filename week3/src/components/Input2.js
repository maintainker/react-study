import { useReducer, useState } from "react";
import changeInput from "../reducer/changeInput";

const Input2 = ({ name, setName }) => {
  const [state, dispatch] = useReducer(changeInput, {
    name: "",
  });
  return (
    <>
      <input
        value={state.name}
        onChange={(e) => dispatch({ name: "name", value: e.target.value })}
      />
    </>
  );
};

export default Input2;
