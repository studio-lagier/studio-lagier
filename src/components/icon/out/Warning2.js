import * as React from "react";

function SvgWarning2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M11.167 4.5L2.825 19.513A1 1 0 003.7 21h17.517a1 1 0 00.853-1.521L12.894 4.464a1 1 0 00-1.727.035z"
          opacity={0.3}
        />
        <rect x={11} y={9} width={2} height={7} rx={1} />
        <rect x={11} y={17} width={2} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgWarning2;
