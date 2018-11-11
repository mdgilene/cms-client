import { Reducer } from "redux";
import { AppAction, AppActions } from "../actions/app.actions";

export interface AppState {
  test: string;
}

const defaultState: AppState = {
  test: ""
};

export const AppReducer: Reducer<AppState, AppAction> = (
  state: AppState = defaultState,
  action: AppAction
) => {
  switch (action.type) {
    case AppActions.TEST_ACTION:
      return {
        test: "HELLO FROM TEST ACTION"
      };
    default:
      return state;
  }
};
