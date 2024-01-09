import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catState";
import catSaga from "./catsaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: () => [sagaMiddleware], // Use getDefaultMiddleware to include other middlewares
});
sagaMiddleware.run(catSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
