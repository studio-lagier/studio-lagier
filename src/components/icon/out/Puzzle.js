import * as React from "react";

function SvgPuzzle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M19 11h1a3 3 0 010 6h-1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3h2a3 3 0 000-6H3V8a2 2 0 012-2h3V5a3 3 0 116 0v1h3a2 2 0 012 2v3z"
        fill="currentColor"
        opacity={0.3}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgPuzzle;
