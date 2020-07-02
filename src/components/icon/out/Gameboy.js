import * as React from "react";

function SvgGameboy(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M11 16v-6a1 1 0 012 0v6h6a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h6z"
          opacity={0.3}
        />
        <circle cx={12} cy={7} r={3} />
      </g>
    </svg>
  );
}

export default SvgGameboy;
