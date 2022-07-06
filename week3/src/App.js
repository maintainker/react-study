import { createContext, useEffect, useState } from "react";
import Canvas from "./components/Canvas";
import Display1 from "./components/Display";
import Display2 from "./components/Display2";
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";
import Layout from "./components/Layout";

export const UserContext = createContext({
  value: "",
  setValue: () => {},
});
function App() {
  const [name1, setName1] = useState("못생긴 룰루");
  const [name2, setName2] = useState("rkt기어");
  const newValue = {
    value: name1,
    setValue: setName1,
  };
  useEffect(() => {
    const changeName1 = async () => {
      await new Promise((resolve) => {
        resolve();
      });
      setName1("이쁜 룰루");
    };
    changeName1();
  }, []);
  return (
    <UserContext.Provider value={newValue}>
      <div className="App">
        <div>{name1}</div>
        <Layout>
          <Input1 name={name2} setName={setName2} />
          <Display1 name={name2} />
        </Layout>
        <Layout>
          <Input2 />
          <Display2 />
        </Layout>
        <Canvas />
      </div>
    </UserContext.Provider>
  );
}

export default App;
