import * as React from "react";

function SvgBox1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path opacity={0.3} d="M6 3h12l2 3.5H4z" />
        <path d="M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2zm3 4a1 1 0 100 2h6a1 1 0 000-2H9z" />
      </g>
    </svg>
  );
}

export default SvgBox1;
