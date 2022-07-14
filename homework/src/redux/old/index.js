import { combineReducers } from "redux";
import todosReducer from "./reducers/todos";
const rootReducer = combineReducers({ todosReducer });

export default rootReducer;
