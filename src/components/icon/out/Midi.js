import * as React from "react";

function SvgMidi(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4 6h17a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
          opacity={0.3}
        />
        <path opacity={0.3} d="M7 13h1v6H7zM12 13h1v6h-1zM17 13h1v6h-1z" />
        <path d="M6 6h3v6a1 1 0 01-1 1H7a1 1 0 01-1-1V6zM11 6h3v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V6zM16 6h3v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V6z" />
      </g>
    </svg>
  );
}

export default SvgMidi;
