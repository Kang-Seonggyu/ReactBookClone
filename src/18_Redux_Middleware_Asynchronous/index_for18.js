import React from 'react';
import ReactDOM from 'react-dom/client';
import App_for18 from "./18_Redux_Middleware_Asynchronous/App_for18";
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './18_Redux_Middleware_Asynchronous/modules';
import { Provider } from 'react-redux';
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App_for18 />
    </Provider>
);
