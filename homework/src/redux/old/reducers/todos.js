export const AddTodo = "TODO_ADD_ITEM";
export const RemoveTodo = "TODO_REMOVE_ITEM";
export const AddCard = "TODO_ADD_CARD";
export const RemoveCard = "TODO_REMOVE_CARD";
export const MoveItemUpDown = "TODO_MOVE_ITEM_UP_DOWN";
export const MoveItemLeftRight = "TODO_MOVE_ITEM_LEFT_RIGHT";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let newTodos;
  switch (type) {
    case AddTodo:
      newTodos = [...state.todos];
      newTodos[payload.cardIdx].items = [
        ...newTodos[payload.cardIdx].items,
        {
          ...payload.item,
          isSuccess: false,
          isSelected: false,
        },
      ];
      return {
        ...state,
        todos: newTodos,
      };

    case AddCard:
      newTodos = [
        ...state.todos,
        {
          ...payload.card,
          items: [],
        },
      ];

      return {
        ...state,
        todos: newTodos,
      };
    case RemoveCard:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== payload.cardIdx),
      };
    case RemoveTodo:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id !== payload.cardIdx) {
            return el;
          }
          return {
            ...el,
            items: el.item.filter((itemEl) => itemEl.id !== payload.itemIdx),
          };
        }),
      };
    default:
      return state;
  }
};

export default todosReducer;
