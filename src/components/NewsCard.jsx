import React from "react";

function NewsCard({ imageSrc, title, date, content }) {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src={imageSrc}
        alt="News Cover"
        width={256}
        height={256}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="relative -top-8 w-full flex">
        <div className="w-11/12 mx-auto bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p>{content}</p>
          <div className="flex items-center gap-3 mb-1 mt-10">
            <i class="fa-regular fa-calendar"></i>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
