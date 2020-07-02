import * as React from "react";

function SvgBatteryHalf(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M11 9v6h6V9h-6zM4 7h13a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
          fillRule="nonzero"
        />
        <path d="M20 10h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4z" opacity={0.3} />
      </g>
    </svg>
  );
}

export default SvgBatteryHalf;
