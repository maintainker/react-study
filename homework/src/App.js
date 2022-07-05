import "./style/app.css";
import ListItem from "./components/list";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAddButton = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        idx: (todos[todos.length - 1]?.idx || 0) + 1,
        label: todoText,
      },
    ]);
    setTodoText("");
  };
  const removeItem = (idx) => {
    setTodos((prev) => prev.filter((item) => item.idx !== idx));
  };
  return (
    <Container>
      <AddButtonContainer onSubmit={handleAddButton}>
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">추가</button>
      </AddButtonContainer>
      <ul className="lists">
        {todos.map((el) => (
          <ListItem
            key={el.idx}
            item={el}
            removeItem={() => removeItem(el.idx)}
          />
        ))}
      </ul>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #ccc;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
const AddButtonContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
