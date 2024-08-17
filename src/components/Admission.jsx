import React from "react";

function AdmissionSection() {
  return (
    <div className="bg-[#bb9457] flex justify-between items-center w-full gap-5 min-h-28 max-w-screen-2xl mx-auto flex-col md:flex-row p-5 text-dark-gray">
      <h2 className="text-2xl md:text-3xl text-center">Get your admission now!</h2>
      <button className="border-2 px-10 py-3 rounded-2xl hover:underline font-semibold">
        <a href="https://portal.kwasu.edu.ng/" target="blank">
          APPLY
        </a>
      </button>
    </div>
  );
}

export default AdmissionSection;
