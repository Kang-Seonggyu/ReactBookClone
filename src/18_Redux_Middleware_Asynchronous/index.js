import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import rootReducer from './modules';
import { Provider } from 'react-redux';
import App_for18 from "./App_for18";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App_for18 />
    </Provider>
);

