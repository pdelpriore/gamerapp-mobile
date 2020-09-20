import authenticationReducer from "../authentication/reducer/AuthenticationReducer";
import loginReducer from "../login/reducer/LoginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authenticationReducer,
  loginReducer
});

export default allReducers;
