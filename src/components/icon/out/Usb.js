import * as React from "react";

function SvgUsb(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect x={4} y={9} width={16} height={9} rx={2} />
        <path
          d="M7 3h10v6H7V3zm2 2v2h2V5H9zm4 0v2h2V5h-2zM10 18h4v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgUsb;
