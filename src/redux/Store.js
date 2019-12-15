import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./Reducers/authReducer";
import userReducer from "./Reducers/userReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer
});

export default createStore(rootReducer, applyMiddleware(promise));
