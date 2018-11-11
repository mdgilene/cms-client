import {
  createStore as createReduxStore,
  applyMiddleware,
  Middleware,
  compose
} from "redux";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { RootReducer, RootState } from "./reducers";

const middleware: Middleware[] = [ThunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(
    ...[
      createLogger({
        collapsed: true
      })
    ]
  );
}

export const createStore = (initialState: Partial<RootState>) => {
  if (process.env.NODE_ENV === "development") {
    return createReduxStore(
      RootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    );
  } else {
    return createReduxStore(
      RootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    );
  }
};
