import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { courseReducer } from "./courseReducer";

export const rootReducer = combineReducers({
  authReducer,
  courseReducer,
});
