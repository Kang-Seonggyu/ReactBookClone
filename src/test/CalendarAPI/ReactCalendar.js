import React, {useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

function ReactCalendar () {
    const [value, SetValue] = useState(new Date());

    return (
        <div>
            <h1>React Calendar</h1>
            <Calendar onChange={SetValue} value={value} />
        </div>
    );
}

export default ReactCalendar;