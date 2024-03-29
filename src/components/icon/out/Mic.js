import * as React from "react";

function SvgMic(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M12.998 17.93L13 18v3a1 1 0 01-2 0v-3c0-.024 0-.047.002-.07A7.002 7.002 0 015 11h2a5 5 0 0010 0h2a7.002 7.002 0 01-6.002 6.93z"
          fillRule="nonzero"
        />
        <rect opacity={0.3} x={9} y={2} width={6} height={12} rx={3} />
      </g>
    </svg>
  );
}

export default SvgMic;
