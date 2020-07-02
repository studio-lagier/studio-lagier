import * as React from "react";

function SvgHomeHeart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M3.957 8.415L11.48 3.82a1 1 0 011.042 0l7.522 4.596A2 2 0 0121 10.122V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-8.878a2 2 0 01.957-1.707z"
          opacity={0.3}
        />
        <path
          d="M13.8 12c-.644 0-1.397.73-1.8 1.2-.403-.47-1.156-1.2-1.8-1.2-1.14 0-1.8.889-1.8 2.02 0 1.253 1.2 2.58 3.6 3.98 2.4-1.4 3.6-2.7 3.6-3.9 0-1.131-.66-2.1-1.8-2.1z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgHomeHeart;
