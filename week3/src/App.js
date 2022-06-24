import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  // const [loading, setLoading] = useState(false);
  const [name1, setName1] = useState("못생긴 룰루");
  const [name2, setName2] = useState("못생긴 기어");
  useEffect(() => {
    const changeName1 = async () => {
      await setTimeout(() => {
        console.log("change Name1");
        setName1("이쁜 룰루");
      }, 1000);
    };
    changeName1();
  }, []);
  useLayoutEffect(() => {
    const chaneName2 = async () => {
      await setTimeout(() => {
        console.log("change Name1");
        setName2("잘생기고 스마트한 기어");
      }, 1000);
    };
    chaneName2();
  }, []);
  return (
    <div className="App">
      <div>{name1}</div>
      <div>{name2}</div>
    </div>
  );
}

export default App;
