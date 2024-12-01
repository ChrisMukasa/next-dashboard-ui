import {calendarEvents} from "@/lib/data";
import {Calendar, momentLocalizer, View, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {useState} from "react";

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)

    const handleView = (selected:View) => {
        setView(selected)
    }
  return (
      <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          views={['work_week', 'day']}
          view={view}
          style={{ height: '100%' }}
          min={new Date(2025, 1, 0, 8, 0, 0)}
          max={new Date(2025, 1, 11, 17, 0, 0)}
          onView={handleView}
      />
  )
}

export default BigCalendar