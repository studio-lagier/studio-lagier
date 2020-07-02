import * as React from "react";

function SvgGit2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={5} y={8} width={2} height={8} rx={1} />
        <path
          d="M6 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"
          fillRule="nonzero"
        />
        <rect opacity={0.3} x={17} y={8} width={2} height={8} rx={1} />
        <path
          d="M18 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM6 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM18 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgGit2;
