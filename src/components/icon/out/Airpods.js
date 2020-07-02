import * as React from "react";

function SvgAirpods(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M17 12.917V20.5a1.5 1.5 0 01-3 0v-9.028a5.98 5.98 0 003 1.445zM10 11.472V20.5a1.5 1.5 0 01-3 0v-7.583a5.98 5.98 0 003-1.445z"
          opacity={0.3}
        />
        <path d="M18 12a5 5 0 110-10 5 5 0 010 10zm-3.25-5.5a.75.75 0 100 1.5h.5a.75.75 0 100-1.5h-.5zM21 5a1 1 0 00-1 1v2a1 1 0 002 0V6a1 1 0 00-1-1zM6 12A5 5 0 116 2a5 5 0 010 10zm2.75-5.5a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 5a1 1 0 00-1 1v2a1 1 0 102 0V6a1 1 0 00-1-1z" />
      </g>
    </svg>
  );
}

export default SvgAirpods;
