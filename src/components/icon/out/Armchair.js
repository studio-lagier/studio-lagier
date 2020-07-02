import * as React from "react";

function SvgArmchair(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M20 8h-1.826a2 2 0 00-2 2v2a1 1 0 01-1 1H8.87a1 1 0 01-1-1v-2a2 2 0 00-2-2H4V6a3 3 0 013-3h10a3 3 0 013 3v2zM6.16 21.06l2-3.464a1 1 0 111.732 1l-2 3.464a1 1 0 11-1.732-1zm11.672-.03a1 1 0 01-1.732 1l-2-3.464a1 1 0 111.732-1l2 3.464z"
          opacity={0.3}
        />
        <path d="M20 10v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5h1.87v2a3 3 0 003 3h6.304a3 3 0 003-3v-2H20z" />
      </g>
    </svg>
  );
}

export default SvgArmchair;
