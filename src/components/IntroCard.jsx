import React from "react";
import { Link } from "react-router-dom";

function IntroSection() {
  return (
    <div className="bg-intro_card_gradient relative">
      <div className="flex flex-col gap-10 md:gap-20 p-5 py-10 md:p-20 lg:p-32">
        <h1 className="text-4xl text-dark-gray">Welcome to ECE Department</h1>
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <div className="p-6 bg-white shadow-lg rounded-md max-w-sm">
            <h2 className="text-2xl font-semibold mb-2">About ECE</h2>
            <p className="text-gray-700 mb-4 leading-7 text-sm">
              The ECE Department at Kwara State University (KWASU), Malete,
              offers a comprehensive education in electrical and computer
              engineering. We cover areas like power systems, control systems,
              and computer design, combining theoretical knowledge with
              practical skills. Our experienced faculty and advanced facilities
              support cutting-edge research and innovation. We are committed to
              producing graduates who are equipped to excel in their careers and
              contribute meaningfully to technological advancements.
            </p>
            <button className="text-dark-gray border-2 border-[#bb9457] px-4 py-2 rounded-lg hover:underline">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/assets/welcomepicture.png"
              alt=""
              className="w-full aspect-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
