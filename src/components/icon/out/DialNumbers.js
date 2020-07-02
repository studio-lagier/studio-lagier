import * as React from "react";

function SvgDialNumbers(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={4} y={4} width={4} height={4} rx={2} />
        <rect x={4} y={10} width={4} height={4} rx={2} />
        <rect x={10} y={4} width={4} height={4} rx={2} />
        <rect x={10} y={10} width={4} height={4} rx={2} />
        <rect x={16} y={4} width={4} height={4} rx={2} />
        <rect x={16} y={10} width={4} height={4} rx={2} />
        <rect x={4} y={16} width={4} height={4} rx={2} />
        <rect x={10} y={16} width={4} height={4} rx={2} />
        <rect x={16} y={16} width={4} height={4} rx={2} />
      </g>
    </svg>
  );
}

export default SvgDialNumbers;
