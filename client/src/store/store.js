import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducers from "./redusers";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
