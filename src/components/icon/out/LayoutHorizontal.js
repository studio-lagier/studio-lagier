import * as React from "react";

function SvgLayoutHorizontal(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={4} y={5} width={16} height={6} rx={1.5} />
        <rect x={4} y={13} width={16} height={6} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgLayoutHorizontal;
