import * as React from "react";

function SvgWarning1Circle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <rect x={11} y={7} width={2} height={8} rx={1} />
        <rect x={11} y={16} width={2} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgWarning1Circle;
