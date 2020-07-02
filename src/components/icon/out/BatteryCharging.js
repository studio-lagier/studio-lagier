import * as React from "react";

function SvgBatteryCharging(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4 9v6h13V9H4zm0-2h13a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
          fillRule="nonzero"
        />
        <path
          d="M10.356 14.055l1.384-1.73a.2.2 0 00-.156-.325H11v-1.84a.2.2 0 00-.366-.11l-1.427 2.14a.2.2 0 00.167.31H10v1.43a.2.2 0 00.356.125zM20 10h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v-4z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgBatteryCharging;
