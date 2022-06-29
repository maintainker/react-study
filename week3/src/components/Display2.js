import { useReducer } from "react";
import changeInput from "../reducer/changeInput";

const Display2 = ({ name }) => {
  const [state] = useReducer(changeInput, {
    name: "",
  });
  return <div>display2: {state.name}</div>;
};

export default Display2;
