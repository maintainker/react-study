import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosSlice from "./slices/todosSlice";
const reducer = combineReducers({
  todos: todosSlice.reducer,
});

const middlewares = [];
const store = configureStore({
  reducer,
  middleware: [...middlewares, ...getDefaultMiddleware()],
});
export default store;
