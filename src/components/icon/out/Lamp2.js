import * as React from "react";

function SvgLamp2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M12 2a1 1 0 011 1v8a1 1 0 01-2 0V3a1 1 0 011-1zM8.126 19h7.748a4.002 4.002 0 01-7.748 0z"
          opacity={0.3}
        />
        <path d="M12 8a9 9 0 019 9H3a9 9 0 019-9z" />
      </g>
    </svg>
  );
}

export default SvgLamp2;
