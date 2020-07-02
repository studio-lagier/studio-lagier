import * as React from "react";

function SvgWatch1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M9 8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H9zm0-2h6a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9a3 3 0 013-3z"
          fillRule="nonzero"
        />
        <path
          d="M9 8a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V9a1 1 0 00-1-1H9zM9 18h6v2.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 20.5V18zM10.5 2h3A1.5 1.5 0 0115 3.5V6H9V3.5A1.5 1.5 0 0110.5 2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgWatch1;
