import * as React from "react";

function SvgCpu1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={4} y={4} width={16} height={16} rx={2} />
        <path opacity={0.3} d="M9 9h6v6H9z" />
        <path d="M20 7h1a1 1 0 010 2h-1V7zM20 11h1a1 1 0 010 2h-1v-2zM20 15h1a1 1 0 010 2h-1v-2zM3 7h1v2H3a1 1 0 110-2zM3 11h1v2H3a1 1 0 010-2zM3 15h1v2H3a1 1 0 010-2z" />
      </g>
    </svg>
  );
}

export default SvgCpu1;
