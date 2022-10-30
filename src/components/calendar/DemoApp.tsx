import "./demoApp.scss";
import React, { useState } from "react";
import FullCalendar, {
  EventContentArg,
  EventClickArg,
  DateSelectArg,
  EventApi,
  EventChangeArg,
  EventRemoveArg,
  EventAddArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  EventDragStartArg,
  EventDragStopArg,
} from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";

function DemoApp() {
  let id = 0;
  const [events, setEvents] = useState<Array<EventApi>>([]);
  const [initialEvents, setInitialEvents] = useState([
    // {
    //   id: String(10001),
    //   title: "test",
    //   start: new Date().toISOString().split("T")[0]+ "T16:05:00",
    // },
    // {
    //   id: String(20002),
    //   title: "test 2",
    //   start: new Date().toISOString().split("T")[0] + "T14:05:00",
    // },
  ]);
  React.useEffect(() => {
    console.log("event", events);
  }, [events]);

  const handleEvents = (event: EventApi[]) => {
    setEvents(events);
  };
  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <b>{eventContent.event.title}</b>
      </>
    );
  };
  const handleEventClick = (clickInfo: EventClickArg) => {
    let idClick = clickInfo.event._instance.defId;
    if (idClick) {
      clickInfo.event.remove(idClick);
    } else {
      console.log("Rien a supprimer");
    }
  };
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = "Non disponible"; //prompt("Entrer votre titre");
    let calenderApi = selectInfo.view.calendar;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: String(id++),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    } else if (title === "") {
      alert("Erreur, veuillez entrer un texte");
    }
  };
  return (
    <div className="content">
      <>
        <FullCalendar
          slotDuration={"01:00:00"}
          slotMinTime={"09:00:00"}
          slotMaxTime={"19:00:00"}
          slotLabelInterval={"01:00:00"}
          slotLabelFormat={{
            hour: "numeric",
            minute: "numeric",
            omitZeroMinute: false,
            meridiem: "short",
          }}
          scrollTime={"15:00:00"}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          customButtons={{
            btn: {
              text: "Test",
              click(ev: MouseEvent, element: HTMLElement) {
                alert(setInitialEvents);
              },
            },
          }}
          // dateClick={(e: DateClickArg) => {
          //   console.log("dateclick", e);
          // }}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventContent={renderEventContent}
          initialEvents={initialEvents}
          initialView="timeGrid" //"timeGridWeek"
          selectable={true}
          editable={true}
          eventDragStart={(e: EventDragStartArg) => {
            console.log("Event Drag Start");
          }}
          eventDragStop={(e: EventDragStopArg) => {
            console.log("Event Drag Stop");
          }}
          eventBackgroundColor={"rgba(151, 34, 56, 0.9)"}
          eventBorderColor={"rgba(151, 34, 56, 0.9)"}
          eventRemove={(e: EventRemoveArg) => {
            console.log("Event remove", e);
          }}
          eventsSet={handleEvents}
          // dayHeaderFormat={{
          //   day: '2-digit',
          //   week: "short",
          //   month: "numeric",
          // }}
          eventAdd={(e: EventAddArg) => {
            console.log("EventAdd", e);
          }}
          eventChange={(e: EventChangeArg) => {
            console.log("Event Change", e);
          }}
          dayMaxEvents={true}
          weekends={true}
          hiddenDays={[0]}
          locales={allLocales}
          locale={"fr"}
          buttonText={{
            day: "Jours",
            prev: "Retour",
            next: "Suivant",
            nextYear: "",
            prevYear: "",
            month: "Mois",
            today: "Aujourd'hui",
            week: "Semaine",
            timeGrid: "Semaine",
          }}
          headerToolbar={{
            left: "prev,next today", //btn
            center: "title",
            right: "timeGrid,timeGridDay", //dayGridMonth
          }}
          firstDay={1}
          visibleRange={(currentDate) => {
            var startDate = new Date(currentDate.valueOf());
            var endDate = new Date(currentDate.valueOf());
            startDate.setDate(startDate.getDate());
            endDate.setDate(endDate.getDate() + 5);
            return { start: startDate, end: endDate };
          }}
        />
      </>
    </div>
  );
}

export default DemoApp;
