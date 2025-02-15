import React from "react";
import "./LogoScroller.css";

const logos = [
  "path/to/logo1.png",
  "path/to/logo2.png",
  // Add all your logo image paths here
];

const LogoScroller = () => {
  const columns = [0, 1, 2, 3]; // Adjust based on the number of columns you need

  return (
    <div className="scroller-container">
      {columns.map((col, index) => (
        <div className="scroller-column" key={index}>
          <div className="scroller-inner">
            {logos.map((logo, i) => (
              <img src={logo} alt={`logo-${i}`} key={i} className="logo" />
            ))}
            {/* Duplicate logos for smooth looping */}
            {logos.map((logo, i) => (
              <img
                src={logo}
                alt={`logo-${i}-duplicate`}
                key={`${i}-dup`}
                className="logo"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoScroller;
