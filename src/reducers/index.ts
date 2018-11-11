import { combineReducers } from "redux";

import { AppReducer, AppState } from "./app.reducer";

export interface RootState {
  app: AppState;
}

export const RootReducer = combineReducers({
  app: AppReducer
});
