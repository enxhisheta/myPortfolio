const EventCard = ({ event, deleteEvent }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <button className="delete-btn" onClick={() => deleteEvent(event.id)}>
        Delete
      </button>
    </div>
  );
};

export { EventCard };
