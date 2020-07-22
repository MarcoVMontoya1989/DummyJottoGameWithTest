import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister();
