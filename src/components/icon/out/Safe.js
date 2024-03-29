import * as React from "react";

function SvgSafe(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6.5 16h1A1.5 1.5 0 019 17.5v2A1.5 1.5 0 017.5 21h-1A1.5 1.5 0 015 19.5v-2A1.5 1.5 0 016.5 16zm10 0h1a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-2a1.5 1.5 0 011.5-1.5z"
          opacity={0.3}
        />
        <path d="M5 4h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zm10.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 8a1 1 0 011 1v2a1 1 0 01-2 0V9a1 1 0 011-1z" />
      </g>
    </svg>
  );
}

export default SvgSafe;
