import * as React from "react";

function SvgShieldThunder(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4 4l7.631-1.43a2 2 0 01.738 0L20 4v9.283a8.51 8.51 0 01-4 7.217l-3.47 2.169a1 1 0 01-1.06 0L8 20.5a8.51 8.51 0 01-4-7.217V4z"
          opacity={0.3}
        />
        <path opacity={0.3} d="M11.333 18L16 11.4h-2.333V7L9 13.6h2.333z" />
      </g>
    </svg>
  );
}

export default SvgShieldThunder;
