import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import * as serviceWorker from "./serviceWorker";
import {
  cellReducer,
  changeTurnReducer,
  scoreReducer
} from "./components/Cell/redux/Cell.reducer";

const rootReducer = combineReducers({
  cells: cellReducer,
  turn: changeTurnReducer,
  score: scoreReducer
});

const store = createStore(rootReducer, {}, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
