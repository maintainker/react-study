import "./style/app.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./components/card";
import { AddCard } from "./redux/slices/todosSlice";

function App() {
  const [cardText, setCardText] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addCardBox = (e) => {
    e.preventDefault();
    if (cardText !== "") {
      dispatch(AddCard({ label: cardText }));
      setCardText("");
    }
  };
  return (
    <Container>
      <Controller onSubmit={addCardBox}>
        <input value={cardText} onChange={(e) => setCardText(e.target.value)} />
        <button type="submit">카드생성</button>
      </Controller>
      <CardContainer>
        {todos.map((el) => (
          <Card key={el.id} todos={el} />
        ))}
      </CardContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: #ccc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;
const Controller = styled.form`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
  gap: 20px;
`;
