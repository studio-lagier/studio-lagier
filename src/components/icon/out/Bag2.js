import * as React from "react";

function SvgBag2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M5.943 4h12.114a1 1 0 01.998.941l.82 13.942A2 2 0 0117.88 21H6.12a2 2 0 01-1.996-2.117l.82-13.942A1 1 0 015.943 4z"
          opacity={0.3}
        />
        <path d="M7 7h2a3 3 0 006 0h2A5 5 0 017 7z" />
      </g>
    </svg>
  );
}

export default SvgBag2;
