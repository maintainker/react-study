import { useContext } from "react";
import { UserContext } from "../App";

const Display2 = () => {
  const { value } = useContext(UserContext);
  console.log(value);
  return <div>display2: {value}</div>;
};

export default Display2;
