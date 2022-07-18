import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardIdx: 0,
  todoIdx: 0,
  selectedItem: null,
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
    ToggleTodo: (state, action) => {
      let willRemove = null;
      state.todos = state.todos.map((el, cardIdx) => {
        if (el.id !== action.payload.cardIdx) {
          return el;
        }
        return {
          ...el,
          items: el.items.map((itemEl, itemIdx) => {
            let isSelected = false;
            if (itemEl.id !== action.payload.itemIdx) {
              return { ...itemEl, isSelected: false };
            }
            if (state.selectedItem?.itemIdx === action.payload.itemIdx) {
              state.selectedItem = null;
            } else if (state.selectedItem) {
              willRemove = state.selectedItem;
              state.selectedItem = {
                itemIdx: action.payload.itemIdx,
                itemIdxCount: itemIdx,
                cardIdx: action.payload.cardIdx,
                cardIdxCount: cardIdx,
              };
              isSelected = true;
            } else {
              state.selectedItem = {
                itemIdx: action.payload.itemIdx,
                itemIdxCount: itemIdx,
                cardIdx: action.payload.cardIdx,
                cardIdxCount: cardIdx,
              };
              isSelected = true;
            }
            return {
              ...itemEl,
              isSelected,
            };
          }),
        };
      });
      if (willRemove) {
        state.todos[willRemove.cardIdxCount].items[
          willRemove.itemIdxCount
        ].isSelected = false;
      }
    },
    MoveUpDownTodo: (state, action) => {
      // const newTodos = [
      state.todos = state.todos.map((el) => {
        if (el.id !== state.selectedItem.cardIdx) {
          return el;
        } else {
          let movingItem = null;
          const newItems = el.items
            .filter((itemEl) => {
              if (itemEl.id === state.selectedItem.itemIdx) movingItem = itemEl;
              return itemEl.id !== state.selectedItem.itemIdx;
            })
            .reduce((prev, curr, idx) => {
              if (idx === action.payload.newItemIdx) {
                prev.push(movingItem);
                movingItem = null;
              }
              prev.push(curr);
              return prev;
            }, []);
          if (movingItem !== null) newItems.push(movingItem);
          return { ...el, items: newItems };
        }
      });
      state.selectedItem.itemIdxCount = action.payload.newItemIdx;
    },
    moveLeftRightTodo: (state, action) => {
      let movingItem = null;
      state.todos = state.todos.map((el) => {
        if (el.id !== state.selectedItem.cardIdx) {
          return el;
        }
        return {
          ...el,
          items: el.items.filter((itemEl) => {
            if (itemEl.id === state.selectedItem.itemIdx) {
              movingItem = itemEl;
            }
            return itemEl.id !== state.selectedItem.itemIdx;
          }),
        };
      });
      state.selectedItem.cardIdx = state.todos[action.payload.newCardIdx].id;
      state.todos[action.payload.newCardIdx].items = state.todos[
        action.payload.newCardIdx
      ].items.reduce((prev, curr, idx) => {
        if (idx === state.selectedItem.itemIdxCount) {
          prev.push(movingItem);
          movingItem = null;
        }
        prev.push(curr);
        return prev;
      }, []);
      if (movingItem !== null) {
        state.todos[action.payload.newCardIdx].items.push(movingItem);
      }
      state.selectedItem.cardIdxCount = action.payload.newCardIdx;
    },
  },
  extraReducers: {},
});

export const {
  AddTodo,
  AddCard,
  RemoveTodo,
  RemoveCard,
  ToggleTodo,
  MoveUpDownTodo,
  moveLeftRightTodo,
} = todosSlice.actions;
export default todosSlice;
