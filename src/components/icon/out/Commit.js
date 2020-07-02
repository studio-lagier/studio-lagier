import * as React from "react";

function SvgCommit(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M20.5 11h2a1.5 1.5 0 010 3h-2a1.5 1.5 0 010-3zm-19 0h2a1.5 1.5 0 010 3h-2a1.5 1.5 0 010-3z"
          opacity={0.3}
        />
        <path
          d="M12 16a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCommit;
