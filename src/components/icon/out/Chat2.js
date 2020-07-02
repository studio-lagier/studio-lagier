import * as React from "react";

function SvgChat2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path opacity={0.3} d="M5 15l-2 6.5 6.5-2z" />
        <path d="M13.5 21a9.5 9.5 0 110-19 9.5 9.5 0 010 19zM9 8a1 1 0 100 2h9a1 1 0 000-2H9zm0 4a1 1 0 000 2h5a1 1 0 000-2H9z" />
      </g>
    </svg>
  );
}

export default SvgChat2;
