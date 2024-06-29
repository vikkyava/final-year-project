import React, { useState } from "react";
import Slideshow from "../components/Slideshow";
import IntroSection from "../components/IntroCard";
import stats from "../content/stats";
import News from "../components/News";
import Events from "../components/Events";

function HomePage() {
  const [highlightTab, setHighlightTab] = useState("news");
  return (
    <>
      <Slideshow />
      <IntroSection />
      <div className="grid grid-cols-4 gap-4 py-20 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-5 justify-center p-4 text-center"
          >
            <i className={`${stat.icon} text-4xl text-green-500`}></i>
            <div className="flex flex-col items-start">
              <div className="text-4xl">{stat.value}</div>
              <div className="text-lg">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-slate-800 via-slate-500 to-slate-700 h-60 outline-red-200 relative">
        <div className="text-4xl  text-white absolute top-20 left-1/2 transform -translate-x-1/2">
          Highlights
        </div>
        <div className="flex gap-1.5 absolute bottom-0 left-1/2 transform -translate-x-1/2 items-center justify-center">
          <button
            type="button"
            className={`${
              highlightTab === "news" ? "bg-white" : "bg-green-500 text-white"
            } w-40 p-4`}
            onClick={() => setHighlightTab("news")}
          >
            Featured News
          </button>
          <button
            type="button"
            className={`${
              highlightTab === "events" ? "bg-white" : "bg-green-500 text-white"
            } w-40 p-4`}
            onClick={() => setHighlightTab("events")}
          >
            Upcoming Events
          </button>
        </div>
      </div>
      <div className="py-20 px-4">
        {highlightTab === "news" ? <News /> : <Events />}
      </div>
    </>
  );
}

export default HomePage;
