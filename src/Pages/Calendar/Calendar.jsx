import { formatDate } from '@fullcalendar/core/index.js'
import { Paper, Stack } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import "./Calender.css"

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

let eventGuid = 0
function createEventId() {
  return String(eventGuid++)
}
export default function Calendar() {

  const [weekendsVisible ] = useState(true)
  const [currentEvents , setcurrentEvents] = useState([])

 

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events) => {

    setcurrentEvents(events)
  }

  return <>
    <Stack direction={'row'}>
      <Paper style={{textAlign:'center'}} className='demo-app-sidebar'>
        
            
        <h2 style={{ marginTop:30 , marginBottom:5, fontSize : 20}}>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map(renderSidebarEvent)}
        </ul>
        
      </Paper>

      
        
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        
        />
      </div>
      
    </Stack>
  </>
}
