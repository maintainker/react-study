import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardIdx: 0,
  todoIdx: 0,
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload.cardIdx) {
          return {
            ...el,
            items: [
              ...el.items,
              {
                ...action.payload.item,
                id: `item_${state.todoIdx}`,
                isSuccess: false,
                isSelected: false,
              },
            ],
          };
        } else {
          return el;
        }
      });
      state.todoIdx++;
    },
    AddCard: (state, action) => {
      state.todos.push({
        ...action.payload.card,
        id: `card_${state.cardIdx}`,
        items: [],
      });
      state.cardIdx++;
    },
    RemoveCard: (state, action) => {
      state.todos = state.todos.filter(
        (el) => el.id !== action.payload.cardIdx
      );
    },
    RemoveTodo: (state, action) => {
      state.todos = state.todos.map((el) => {
        if (el.id !== action.payload.cardIdx) {
          return el;
        }
        return {
          ...el,
          items: el.items.filter(
            (itemEl) => itemEl.id !== action.payload.itemIdx
          ),
        };
      });
    },
  },
  extraReducers: {},
});

export const { AddTodo, AddCard, RemoveTodo, RemoveCard } = todosSlice.actions;
export default todosSlice;
