import * as React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./routes/Home";

import { RootState } from "./reducers";
import { fireTestAction } from "./actions/app.actions";
import { AppState } from "./reducers/app.reducer";

export interface AppProps {
  app: AppState;
  fireTestAction: () => void;
}

class App extends React.Component<AppProps> {
  public render() {
    return (
      <div className="App">
        <button onClick={this.props.fireTestAction}>Fire Test Action</button>
        <div>TEST STATE = {this.props.app.test}</div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    app: state.app
  };
};

export default connect(
  mapStateToProps,
  { fireTestAction }
)(App);
