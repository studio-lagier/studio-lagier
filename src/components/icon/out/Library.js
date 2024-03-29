import * as React from "react";

function SvgLibrary(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5 3h1a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1zm5 0h1a1 1 0 011 1v16a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <rect
          opacity={0.3}
          transform="rotate(-19 17.826 11.946)"
          x={16.326}
          y={2.946}
          width={3}
          height={18}
          rx={1}
        />
      </g>
    </svg>
  );
}

export default SvgLibrary;
