import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-700 text-white text-sm rounded shadow-lg whitespace-nowrap z-10">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
