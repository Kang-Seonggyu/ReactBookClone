import React from 'react';
import ReactDOM from 'react-dom/client';
import App_for18 from "./18_Redux_Middleware_Asynchronous/App_for18";
import { createStore, applyMiddleware } from 'redux'
import rootReducer, { rootSaga } from './18_Redux_Middleware_Asynchronous/modules';
import { Provider } from 'react-redux';
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App_for18 />
    </Provider>
);