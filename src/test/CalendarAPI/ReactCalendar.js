import React, {useState} from "react";
import Calendar from "react-calendar";

function ReactCalendar () {
    const [value, SetValue] = useState(new Date());

    return (
        <div>
            <Calendar onChange={SetValue} value={value} />
        </div>
    );
}

export default ReactCalendar;