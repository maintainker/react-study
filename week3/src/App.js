import { useEffect, useLayoutEffect, useState } from "react";
import Display1 from "./components/Display";
import Display2 from "./components/Display2";
import Input1 from "./components/Input1";
import Input2 from "./components/Input2";
import Layout from "./components/Layout";

function App() {
  const [name1, setName1] = useState("못생긴 룰루");
  const [name2, setName2] = useState("rkt기어");
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
    <div className="App">
      <div>{name1}</div>
      <Layout>
        <Input1 name={name2} setName={setName2} />
        <Display1 name={name2} />
      </Layout>
      <Layout>
        <Input2 />
        <Display2 name={name2} />
      </Layout>
    </div>
  );
}

export default App;
