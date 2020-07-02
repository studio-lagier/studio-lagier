import * as React from "react";

function SvgControl(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 6.5l-8.356 7.265a1 1 0 01-1.288-1.53l8.65-7.79A1.5 1.5 0 0113 4.5l8.685 7.772a1 1 0 01-1.37 1.456L12 6.5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgControl;
