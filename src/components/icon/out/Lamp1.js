import * as React from "react";

function SvgLamp1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M10 19h4a2 2 0 012 2H8a2 2 0 012-2z" fill="currentColor" />
        <rect
          fill="currentColor"
          opacity={0.3}
          x={11}
          y={12}
          width={2}
          height={6}
          rx={1}
        />
        <rect
          fill="#FFF"
          transform="rotate(-15 16.613 8.674)"
          x={15.613}
          y={6.174}
          width={2}
          height={5}
          rx={1}
        />
        <path
          d="M7.442 4h9.116a2 2 0 011.898 1.368L21 13H3l2.544-7.632A2 2 0 017.442 4z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgLamp1;
