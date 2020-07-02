import * as React from "react";

function SvgMailbox(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M8 6h12.5a1.5 1.5 0 010 3H8v10.5a1.5 1.5 0 01-3 0V9H3.5a1.5 1.5 0 010-3H5V4.5a1.5 1.5 0 013 0V6z" />
        <path
          d="M10 11h10.5a1.5 1.5 0 011.5 1.5V15a4 4 0 01-4 4h-6.5a1.5 1.5 0 01-1.5-1.5V11zm10 1a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgMailbox;
