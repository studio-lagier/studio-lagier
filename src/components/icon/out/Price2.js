import * as React from "react";

function SvgPrice2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g
        transform="rotate(45 8.293 18.743)"
        fill="currentColor"
        opacity={0.3}
        fillRule="evenodd"
      >
        <path d="M.354 7.146h3c.056 0 .111-.004.165-.013a3.001 3.001 0 005.835-.987 3 3 0 00-5.835-.986 1.007 1.007 0 00-.165-.014H.437a6.002 6.002 0 0111.917 1v13a2 2 0 01-2 2h-8a2 2 0 01-2-2v-12z" />
        <rect x={2.354} y={13.146} width={8} height={2} rx={1} />
        <rect x={3.354} y={17.146} width={6} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgPrice2;
