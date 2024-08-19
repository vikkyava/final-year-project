import React, { useState } from "react";
import Slideshow from "../components/Slideshow";
import IntroSection from "../components/IntroCard";
import stats from "../content/stats";
import News from "../components/News";
import Events from "../components/Events";
import CourseCard from "../components/CourseInfoCard";

function HomePage() {
  const [highlightTab, setHighlightTab] = useState("news");
  return (
    <>
      <Slideshow />
      <IntroSection />
      <div className="py-20">
        <h1 className="text-3xl mx-auto text-center mb-8">
          ECE By The Numbers
        </h1>
        <div className="md:grid flex flex-col grid-cols-4 gap-4">
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
            } w-50 p-4`}
            onClick={() => setHighlightTab("events")}
          >
            Upcoming Events
          </button>
        </div>
      </div>
      <div className="py-20 ">
        {highlightTab === "news" ? <News /> : <Events />}
      </div>
      <h1 className="text-center text-3xl">Course Options</h1>
      <div className="flex flex-wrap gap-5 py-20">
        <CourseCard
          imageSrc="/assets/communications.jpg"
          // date="June 13, 2024"
          title="Communications Engineering"
          description="Communication Engineering in the ECE (Electrical and Computer Engineering) Department at Kwara State University focuses on the study and application of communication technologies. The course covers fundamental concepts of analog and digital communication, signal processing, wireless communication, and network systems. Students learn about the design, analysis, and implementation of communication systems used in various industries, including telecommunications, broadcasting, and data networks.

          The curriculum is designed to equip students with both theoretical knowledge and practical skills, preparing them for careers in communication engineering, telecommunications, and related fields. Students also explore emerging trends in communication technology, such as 5G networks, IoT, and satellite communication."
        />
        <CourseCard
          imageSrc="/assets/control.jpg"
          // date="June 13, 2024"
          title="Control Engineering"
          description="Control Engineering in the ECE (Electrical and Computer Engineering) Department at Kwara State University focuses on the analysis and design of control systems that govern the behavior of dynamic systems. The course covers key concepts such as system modeling, feedback control, stability analysis, and the implementation of control strategies for various engineering applications.

          Students gain a deep understanding of how to design and optimize control systems for different industries, including automotive, aerospace, manufacturing, and robotics. The curriculum includes both theoretical foundations and hands-on experience with tools and technologies used in modern control engineering. Graduates are well-prepared for careers in automation, robotics, and systems engineering, with a strong ability to develop solutions that ensure the stability and efficiency of complex systems."
        />
        <CourseCard
          imageSrc="/assets/power.jpg"
          // date="June 13, 2024"
          title="Power system and Electrical Machine"
          description="Power System and Electrical Machine in the ECE (Electrical and Computer Engineering) Department at Kwara State University focuses on the principles and applications of power generation, transmission, distribution, and the operation of electrical machines. The course covers key topics such as power system analysis, electrical machine theory, power electronics, and the integration of renewable energy sources into the grid.

          Students learn about the design, operation, and maintenance of power systems and electrical machines, including transformers, generators, and motors. The curriculum emphasizes both theoretical knowledge and practical skills, preparing students to tackle challenges in the energy sector. Graduates are equipped to work in industries such as power generation, transmission, distribution, and manufacturing, contributing to the development and management of efficient and sustainable electrical systems"
        />
      </div>
    </>
  );
}

export default HomePage;
