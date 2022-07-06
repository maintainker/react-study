import { useContext } from "react";
import { UserContext } from "../App";

const Input2 = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default Input2;
