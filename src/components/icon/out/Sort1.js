import * as React from "react";

function SvgSort1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect x={4} y={5} width={16} height={3} rx={1.5} />
        <path
          d="M7.5 11h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3zm3 6h3a1.5 1.5 0 010 3h-3a1.5 1.5 0 010-3z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgSort1;
