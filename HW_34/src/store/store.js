import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import actionInfoReducer from "./toDoInfo/toDoInfo.reducer";
import actionReducer from "./toDoList/toDoList.reducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  actionInfo: actionInfoReducer,
  actions: actionReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);