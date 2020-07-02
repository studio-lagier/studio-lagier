import * as React from "react";

function SvgMinus(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <rect x={6} y={11} width={12} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgMinus;
