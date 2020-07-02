import * as React from "react";

function SvgBuilding(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M13.5 21v-3a1 1 0 00-1-1h-1a1 1 0 00-1 1v3H5V4a2 2 0 012-2h10a2 2 0 012 2v17h-5.5zM9 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1H9zm5 0a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1h-1zM9 8a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1H9zm0 4a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H9zm5 0a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1h-1z"
          fill="currentColor"
        />
        <rect fill="#FFF" x={13} y={8} width={3} height={3} rx={1} />
        <path
          d="M4 21h16a1 1 0 011 1v.4a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V22a1 1 0 011-1z"
          fill="currentColor"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgBuilding;
