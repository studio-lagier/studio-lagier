import * as React from "react";

function SvgVideoCamera(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect x={2} y={6} width={13} height={12} rx={2} />
        <path
          d="M22 8.414v7.172a1 1 0 01-1.707.707l-3.586-3.586a1 1 0 010-1.414l3.586-3.586A1 1 0 0122 8.414z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgVideoCamera;
