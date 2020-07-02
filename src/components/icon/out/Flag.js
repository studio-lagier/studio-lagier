import * as React from "react";

function SvgFlag(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3.5 3H5v16.5a1.5 1.5 0 01-3 0v-15A1.5 1.5 0 013.5 3z" />
        <path
          d="M7 3h12.755a1 1 0 01.743 1.669L17.5 8l2.998 3.331A1 1 0 0119.755 13H7V3z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgFlag;
