import * as React from "react";

function SvgAirBallon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M10.157 15.71a6.672 6.672 0 003.61 0l.511 1.378a.424.424 0 01-.395.577l-1.077-.027c.056 1.188.488 1.87 1.61 2.25.443.149.681.632.534 1.08a.84.84 0 01-1.066.54c-1.812-.612-2.706-1.92-2.762-3.843h-1.08a.429.429 0 01-.395-.577l.51-1.378z"
          fillRule="nonzero"
        />
        <path
          d="M12 16a7 7 0 110-14 7 7 0 010 14zM8.816 8.8a.656.656 0 10-1.31.092c.117 1.661.89 2.972 2.289 3.875a.656.656 0 00.712-1.102c-1.051-.68-1.604-1.616-1.691-2.864z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgAirBallon;
