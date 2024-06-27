import React from "react";
import { Link } from "react-router-dom";
import events from "../content/event";
import EventCard from "./EventCard";

function Events({ viewAll = false }) {
  const visibleEvents = viewAll ? events : events.slice(0, 3);

  return (
    <div className="flex items-center flex-col gap-12">
      <div className="flex gap-4 items-center justify-center">
        {visibleEvents.map((eventsItem, index) => (
          <EventCard key={index} {...eventsItem} />
        ))}
      </div>
      {events.length > 3 && !viewAll && (
        <div className="h-8 px-5 bg-green-500 rounded-2xl flex items-center">
          <Link to="/news-and-events" className="text-white">
            View All Events
          </Link>
        </div>
      )}
    </div>
  );
}

export default Events;
