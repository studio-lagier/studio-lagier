import * as React from "react";

function SvgChartPie(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z"
          opacity={0.3}
        />
        <path d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z" />
      </g>
    </svg>
  );
}

export default SvgChartPie;
