import * as React from "react";

function SvgLock(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M7 10V8a5 5 0 1110 0v2h1a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h1zm5-5a3 3 0 00-3 3v2h6V8a3 3 0 00-3-3z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgLock;
