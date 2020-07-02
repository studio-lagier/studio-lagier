import * as React from "react";

function SvgDoneCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path
          d="M16.769 7.818a1 1 0 011.462 1.364l-7 7.5a1 1 0 01-1.382.077l-3.5-3a1 1 0 011.302-1.518l2.772 2.376 6.346-6.8z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgDoneCircle;
