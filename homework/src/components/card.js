import React, { useState } from "react";
import ListItem from "./list";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AddTodo, RemoveCard } from "../redux/slices/todosSlice";

/**
 *  removeItem: (cardIdx,itemIdx) =>void
 *  addItem: (cardIdx) =>void
 * card {
 *  items : item[],
 *  id: string,
 *  label: string
 * }
 *
 */

const Card = ({ todos }) => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const removeCardBox = () => {
    dispatch(RemoveCard({ cardIdx: todos.id }));
  };
  const addItemBox = (e) => {
    e.preventDefault();
    if (todoText !== "") {
      dispatch(AddTodo({ cardIdx: todos.id, item: { label: todoText } }));
      setTodoText("");
    }
  };
  return (
    <div>
      <AddButtonContainer onSubmit={addItemBox}>
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">추가</button>
      </AddButtonContainer>
      <ul className="lists">
        {todos.items.map((el) => (
          <ListItem key={el.id} item={el} cardIdx={todos.id} />
        ))}
      </ul>
      <button onClick={removeCardBox}>카드 제거하기</button>
    </div>
  );
};

export default Card;

const AddButtonContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
