import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { createStore } from "./store";

if (process.env.NODE_ENV === "development") {
  console.log("Running app in DEVELOPMENT mode");
}

const store = createStore({});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
