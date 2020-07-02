import * as React from "react";

function SvgDislike(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15 10v9l-1.153.384a12 12 0 01-3.794.616H6.459a3 3 0 01-2.941-2.412l-.75-3.746a3 3 0 013.142-3.581l3.59.239-.364-4.006A1.37 1.37 0 0110.5 5c.93 0 1.793.488 2.272 1.286L15 10z" />
        <rect
          opacity={0.3}
          transform="matrix(-1 0 0 1 39 0)"
          x={17}
          y={9}
          width={5}
          height={11}
          rx={1}
        />
      </g>
    </svg>
  );
}

export default SvgDislike;
