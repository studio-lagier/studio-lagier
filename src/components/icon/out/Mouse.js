import * as React from "react";

function SvgMouse(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={6} y={5} width={12} height={18} rx={6} />
        <path d="M11.5 2h1a.5.5 0 01.5.5V5h-2V2.5a.5.5 0 01.5-.5z" />
        <rect x={11} y={16} width={2} height={5} rx={1} />
      </g>
    </svg>
  );
}

export default SvgMouse;
