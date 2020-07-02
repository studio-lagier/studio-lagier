import * as React from "react";

function SvgUpboard(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M3.5 3h6A1.5 1.5 0 0111 4.5v14A1.5 1.5 0 019.5 20h-6A1.5 1.5 0 012 18.5v-14A1.5 1.5 0 013.5 3zM9 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"
          opacity={0.3}
        />
        <path d="M20.5 3h-6A1.5 1.5 0 0013 4.5v14a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-14A1.5 1.5 0 0020.5 3zM15 9a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z" />
      </g>
    </svg>
  );
}

export default SvgUpboard;
