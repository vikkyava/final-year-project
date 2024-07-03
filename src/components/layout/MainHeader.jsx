import React from "react";

function MainHeader() {
  return (
    <header>
      <div className="bg-green-400 py-9">
        <div className="max-w-6xl mx-auto">
          <img src="/" alt="Kwasu" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mt-3">
          <a href="/" >Department of Electrical and Computer Engineering</a>
        </h2>
        <h3 className="text-lg">
          <a href="https://kwasu.edu.ng/of-engineering-and-technology/" title="Faculty of  Engineering and Technology">Faculty of  Engineering and Technology</a>
        </h3>
      </div>
    </header>
  );
}

export default MainHeader;
