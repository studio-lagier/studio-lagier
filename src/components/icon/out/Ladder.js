import * as React from "react";

function SvgLadder(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M7 5h10a1 1 0 010 2H7a1 1 0 110-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2z"
          opacity={0.3}
        />
        <path d="M5.5 2A1.5 1.5 0 017 3.5v17a1.5 1.5 0 01-3 0v-17A1.5 1.5 0 015.5 2zm13 0A1.5 1.5 0 0120 3.5v17a1.5 1.5 0 01-3 0v-17A1.5 1.5 0 0118.5 2z" />
      </g>
    </svg>
  );
}

export default SvgLadder;
