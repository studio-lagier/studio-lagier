import * as React from "react";

function SvgAppleWatch(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M16.45 4.176a1 1 0 01-.99 1.737 7 7 0 10-.031 12.19 1 1 0 01.981 1.744 9 9 0 11.04-15.671z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M18.5 6A2.5 2.5 0 0121 8.5v7a2.5 2.5 0 11-5 0v-7A2.5 2.5 0 0118.5 6zm0 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </g>
    </svg>
  );
}

export default SvgAppleWatch;
