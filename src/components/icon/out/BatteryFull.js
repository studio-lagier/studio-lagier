import * as React from "react";

function SvgBatteryFull(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect x={2} y={7} width={17} height={10} rx={2} />
        <path d="M20 10h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4z" opacity={0.3} />
      </g>
    </svg>
  );
}

export default SvgBatteryFull;
