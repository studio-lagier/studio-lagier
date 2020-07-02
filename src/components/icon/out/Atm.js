import * as React from "react";

function SvgAtm(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={2} y={4} width={20} height={5} rx={1} />
        <path d="M5 7h3v14H7a2 2 0 01-2-2V7zm14 0v12a2 2 0 01-2 2h-6V7h8z" />
      </g>
    </svg>
  );
}

export default SvgAtm;
