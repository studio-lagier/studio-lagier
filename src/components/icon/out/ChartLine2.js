import * as React from "react";

function SvgChartLine2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M5 19h15a1 1 0 010 2H4a1 1 0 01-1-1V4a1 1 0 112 0v15z" />
        <path
          d="M8.73 6.816a1 1 0 10-1.46 1.368l3.75 4a1 1 0 001.38.077l2.959-2.526 3.856 4.885a1 1 0 001.57-1.24l-4.5-5.7a1 1 0 00-1.434-.14l-3.024 2.58L8.73 6.816z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgChartLine2;
