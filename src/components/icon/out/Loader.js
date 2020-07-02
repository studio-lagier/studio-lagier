import * as React from "react";

function SvgLoader(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M8 4a1 1 0 011 1v12h9a1 1 0 010 2H9a1 1 0 01-1-1 1 1 0 01-1-1V6H5a1 1 0 110-2h3z"
          opacity={0.3}
        />
        <rect opacity={0.3} x={11} y={7} width={8} height={8} rx={4} />
        <circle cx={8} cy={18} r={3} />
      </g>
    </svg>
  );
}

export default SvgLoader;
