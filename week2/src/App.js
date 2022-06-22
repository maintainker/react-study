import { useState } from "react";
import MapList from "./components/mapList";

function App() {
  const [testInput, setTestInput] = useState("");
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setTestInput(value);
  };
  return (
    <div className="App">
      <input type="text" value={testInput} onChange={handleChange} />
      <ButtonSection alertMessage={testInput} />
      <MapList />
    </div>
  );
}

export default App;
