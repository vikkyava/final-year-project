import React from "react";

function EventCard({ imageSrc, title, date, location }) {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src={imageSrc}
        alt="Event Cover"
        width={256}
        height={256}
        className="w-full aspect-square object-cover rounded-lg"
      />
      <div className="relative -top-10 w-full flex">
        <div className="w-11/12 mx-auto bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <div className="flex items-center gap-3 mb-1 mt-5">
            <i class="fa-regular fa-calendar"></i>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-3 mb-1 mt-2">
            <i class="fa-solid fa-location-dot"></i>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
