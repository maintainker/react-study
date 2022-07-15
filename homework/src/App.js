import "./style/app.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./components/card";
import {
  AddCard,
  moveLeftRightTodo,
  MoveUpDownTodo,
} from "./redux/slices/todosSlice";

function App() {
  const [cardText, setCardText] = useState("");
  const { todos, selectedItem } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addCardBox = (e) => {
    e.preventDefault();
    if (cardText !== "") {
      dispatch(AddCard({ label: cardText }));
      setCardText("");
    }
  };
  const moveUpDown = (newItemIdx) => {
    if (newItemIdx >= todos[selectedItem.cardIdxCount].items.length) {
      alert("맨 아래입니다.");
      return;
    }
    if (newItemIdx < 0) {
      alert("최상단입니다.");
      return;
    }
    dispatch(MoveUpDownTodo({ newItemIdx }));
  };
  const moveLeftRight = (newCardIdx) => {
    if (newCardIdx >= todos.length) {
      alert("가장 오른쪽입니다.");
      return;
    }
    if (newCardIdx < 0) {
      alert("가장 왼쪽입니다.");
      return;
    }
    dispatch(moveLeftRightTodo({ newCardIdx }));
  };
  return (
    <Container>
      <ControllerConatiner>
        <Controller onSubmit={addCardBox}>
          <input
            value={cardText}
            onChange={(e) => setCardText(e.target.value)}
          />
          <button type="submit">카드생성</button>
        </Controller>
        <ButtonContainer>
          <button onClick={() => moveUpDown(selectedItem.itemIdxCount - 1)}>
            위
          </button>
          <button onClick={() => moveUpDown(selectedItem.itemIdxCount + 1)}>
            아래
          </button>
          <button onClick={() => moveLeftRight(selectedItem.cardIdxCount - 1)}>
            왼쪽
          </button>
          <button onClick={() => moveLeftRight(selectedItem.cardIdxCount + 1)}>
            오른쪽
          </button>
        </ButtonContainer>
      </ControllerConatiner>
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
const ControllerConatiner = styled.div``;
const Controller = styled.form`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const CardContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
  gap: 20px;
`;
