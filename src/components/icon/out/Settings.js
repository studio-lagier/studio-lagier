import * as React from "react";

function SvgSettings(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4.5 7h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm9 8h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3z"
          opacity={0.3}
        />
        <path d="M17 11a3 3 0 110-6 3 3 0 010 6zM6 19a3 3 0 110-6 3 3 0 010 6z" />
      </g>
    </svg>
  );
}

export default SvgSettings;
