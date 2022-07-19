import React from 'react'
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Redux/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import App from "./App";

const store = createStore(reducer , composeWithDevTools())

const AppWrapper = () => {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  )
}

export default AppWrapper
