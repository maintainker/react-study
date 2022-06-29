import { useState } from "react";

const Input1 = ({ name, setName }) => {
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default Input1;
