import * as React from "react";

function SvgChartBar2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={17} y={4} width={3} height={13} rx={1.5} />
        <rect opacity={0.3} x={12} y={9} width={3} height={8} rx={1.5} />
        <path
          d="M5 19h15a1 1 0 010 2H4a1 1 0 01-1-1V4a1 1 0 112 0v15z"
          fillRule="nonzero"
        />
        <rect opacity={0.3} x={7} y={11} width={3} height={6} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgChartBar2;
