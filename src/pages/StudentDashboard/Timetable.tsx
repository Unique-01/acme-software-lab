import React, { useState, useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

interface Event {
  id: number;
  title: string;
  tutor: string;
  time: string;
}

interface EventList {
  [date: string]: Event[];
}

// Sample events data (replace this with your actual data)
const eventsData: EventList = {
  "2024-11-16": [
    { id: 1, title: "Introduction to Computers", tutor: "Mr Paul", time: "8:00 AM" },
    { id: 2, title: "Microsoft Office Suite", tutor: "Mr Paul", time: "10:30 AM" },
  ],
  // Add more dates and events
};

const App: React.FC = () => {
  const [dates, setDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [events, setEvents] = useState<Event[]>(eventsData[selectedDate] || []);

  useEffect(() => {
    // Initialize the dates (e.g., from today)
    const today = new Date();
    const initialDates = Array.from({ length: 7 }, (_, i) => new Date(today.getTime() + i * 86400000));
    setDates(initialDates);
  }, []);

  const loadMoreDates = () => {
    // Load more dates (simulate infinite scrolling)
    const lastDate = dates[dates.length - 1];
    const newDates = Array.from({ length: 7 }, (_, i) => new Date(lastDate.getTime() + (i + 1) * 86400000));
    setDates((prevDates) => [...prevDates, ...newDates]);
  };

  const handleDateClick = (date: Date) => {
    const formattedDate = date.toISOString().slice(0, 10);
    setSelectedDate(formattedDate);
    setEvents(eventsData[formattedDate] || []);
  };

  return (
    <div className="calendar">
      <ScrollMenu
        onWheel={loadMoreDates}
        options={{
          ratio: 0.9,
        //  tu
        }}
      >
        {dates.map((date) => {
          const formattedDate = date.toISOString().slice(0, 10);
          return (
            <button
              key={formattedDate}
              className={`date-item ${selectedDate === formattedDate ? 'selected' : ''}`}
              onClick={() => handleDateClick(date)}
            >
              {date.getDate()} <br /> {date.toLocaleDateString('en', { weekday: 'short' })}
            </button>
          );
        })}
      </ScrollMenu>

      <div className="events">
        <h3>Classes</h3>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <p>{event.title}</p>
              <p><strong>Tutor:</strong> {event.tutor}</p>
              <p>{event.time}</p>
            </div>
          ))
        ) : (
          <p>No events for this day</p>
        )}
      </div>
    </div>
  );
};

export default App;
