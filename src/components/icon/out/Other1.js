import * as React from "react";

function SvgOther1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle cx={12} cy={5} r={2} />
        <circle cx={12} cy={12} r={2} />
        <circle cx={12} cy={19} r={2} />
      </g>
    </svg>
  );
}

export default SvgOther1;
