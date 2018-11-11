import { Dispatch } from "redux";

export interface AppAction {
  type: AppActions;
  payload: any;
}

export enum AppActions {
  TEST_ACTION = "APP::TEST_ACTION"
}

const testAction = (): AppAction => {
  return {
    type: AppActions.TEST_ACTION,
    payload: {}
  };
};

export const fireTestAction = () => (dispatch: Dispatch) => {
  dispatch(testAction());
};
