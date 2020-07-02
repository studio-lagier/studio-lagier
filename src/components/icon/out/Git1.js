import * as React from "react";

function SvgGit1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={11} y={8} width={2} height={9} rx={1} />
        <path
          d="M12 21a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8zM12 7a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 110-8 4 4 0 010 8z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgGit1;
