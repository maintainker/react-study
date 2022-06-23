import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DroppableContainer from "./components/dropableContainer";

function App() {
  return (
    <div className="App">
      <DragDropContext>
        <Droppable droppableId="test1">
          {(provided) => <DroppableContainer provided={provided} />}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
