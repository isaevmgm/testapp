import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import imagesReducer from "./images";
import bigimgReducer from "./bigimg";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  images: imagesReducer,
  bigimg: bigimgReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
