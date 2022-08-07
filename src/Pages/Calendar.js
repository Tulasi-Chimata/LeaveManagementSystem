import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Headers from "./Navbar/Headers";
const events = [{ title: "Today", date: new Date() }];
function Calendar() {
  return (
    <div>
      <Headers />

      <div className="container">
        <div className="row title" style={{ marginTop: "3px" }}>
          <div class="col-sm-12 btn btn-info">Calendar</div>{" "}
        </div>
     
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div> </div>
  );
}

export default Calendar;
