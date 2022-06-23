import ListItem from "./components/list";
import "./style/app.css";

const mockData = new Array(10).fill(null).map((_, idx) => {
  return {
    label: `item ${idx}`,
    idx: `item_${idx}`,
  };
});

function App() {
  return (
    <div className="App">
      <ul className="lists">
        {mockData.map((el) => (
          <ListItem key={el.idx} item={el} />
        ))}
      </ul>
    </div>
  );
}

export default App;
