import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer, { initialState } from "./reducer";
import rootSaga from "./saga";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, state, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
