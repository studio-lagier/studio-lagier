import * as React from "react";

function SvgTablet(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6.5 4v16h11V4h-11zM7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"
          fillRule="nonzero"
        />
        <path opacity={0.3} d="M6.5 4v16h11V4z" />
      </g>
    </svg>
  );
}

export default SvgTablet;
