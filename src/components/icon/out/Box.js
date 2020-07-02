import * as React from "react";

function SvgBox(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M4 7h16v12.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 19.5V7zm6 3a1 1 0 000 2h4a1 1 0 000-2h-4z" />
        <rect opacity={0.3} x={2} y={3} width={20} height={4} rx={1} />
      </g>
    </svg>
  );
}

export default SvgBox;
