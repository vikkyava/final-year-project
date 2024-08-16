import React from "react";

function AdmissionSection() {
  return (
    <div className="bg-[#bb9457] flex justify-around items-center w-full h-28 text-dark-gray">
      <h2 className="text-3xl">Get your admission now!</h2>
      <button className="border-2 px-10 py-3 rounded-2xl hover:underline font-semibold">
        <a href="https://portal.kwasu.edu.ng/" target="blank">
          APPLY
        </a>
      </button>
    </div>
  );
}

export default AdmissionSection;
