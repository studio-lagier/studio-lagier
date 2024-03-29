import * as React from "react";

function SvgLayout3D(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M1.5 5h3A1.5 1.5 0 016 6.5v11A1.5 1.5 0 014.5 19h-3A1.5 1.5 0 010 17.5v-11A1.5 1.5 0 011.5 5zm17 0h4A1.5 1.5 0 0124 6.5v11a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-11A1.5 1.5 0 0118.5 5z" />
        <rect opacity={0.3} x={8} y={5} width={7} height={14} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgLayout3D;
