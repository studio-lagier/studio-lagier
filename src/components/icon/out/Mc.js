import * as React from "react";

function SvgMc(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M10.823 8.37l1.91 1.453a3.6 3.6 0 11.225 4.622l-1.762 1.63a6 6 0 10-.374-7.706z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M8.4 18a6 6 0 110-12 6 6 0 010 12z" />
      </g>
    </svg>
  );
}

export default SvgMc;
