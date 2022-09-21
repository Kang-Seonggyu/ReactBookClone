
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";
import rootReducer from "./17_Redux_ReactAppStateManagement/Modules";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import App_for17 from "./17_Redux_ReactAppStateManagement/App_for17";

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App_for17 />
    </Provider>
);

