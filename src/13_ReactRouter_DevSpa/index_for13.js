import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App_for13 from "./13_ReactRouter_DevSpa/App_for13";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App_for13 />
    </BrowserRouter>
);