import * as React from "react";

function SvgWood1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M12 19a7 7 0 007-7c0-2.577-2.333-5.91-7-10-4.667 4.09-7 7.423-7 10a7 7 0 007 7z"
          opacity={0.3}
        />
        <rect x={11} y={11} width={2} height={11} rx={1} />
      </g>
    </svg>
  );
}

export default SvgWood1;
