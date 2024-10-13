import { useState } from "react";
import EventForm from "./EventForm";
import EventCard from "./EventCard";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }]);
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <section id="events">
      <h2>My Events</h2>
      <EventForm addEvent={addEvent} />
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} deleteEvent={deleteEvent} />
        ))}
      </div>
    </section>
  );
};

export { Events };
