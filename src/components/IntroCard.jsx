import React from "react";

function IntroSection() {
  return (
    <div className="bg-intro_card_gradient h-screen  relative">
      <h1 className="text-4xl ps-32 pt-20">Welcome to ECE Department</h1>
      <div className="absolute top-1/3 ml-32 p-6 bg-white shadow-lg rounded-md max-w-sm ">
        <h2 className="text-2xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-700 mb-4">
          This is some text inside the card. It provides an overview of the
          content.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Button
        </button>
      </div>
    </div>
  );
}

export default IntroSection;
