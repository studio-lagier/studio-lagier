import * as React from "react";

function SvgOption(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={12} y={7} width={10} height={2} rx={1} />
        <path
          d="M2 9a1 1 0 110-2h5.35a2 2 0 011.828 1.188L12.65 16H22a1 1 0 010 2h-9.35a2 2 0 01-1.828-1.188L7.35 9H2z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgOption;
