import * as React from "react";

function SvgLayoutVertical(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect x={5} y={4} width={6} height={16} rx={1.5} />
        <rect opacity={0.3} x={13} y={4} width={6} height={16} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgLayoutVertical;
