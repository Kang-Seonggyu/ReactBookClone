// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from "./App";
//
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

import App_for18 from "./18_Redux_Middleware_Asynchronous/App_for18";
import ReactDOM from "react-dom/client";
import ReactCalendar from "./test/CalendarAPI/ReactCalendar";
import MomentCalendar from "./test/CalendarAPI/MomentCalendar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ReactCalendar />
        <MomentCalendar />
    </>
);
