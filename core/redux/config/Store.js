import { createStore, applyMiddleware } from "redux";
import allReducers from "../combineReducers/Index";
import thunk from "redux-thunk";

export default store = createStore(allReducers, applyMiddleware(thunk));
