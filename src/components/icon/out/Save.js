import * as React from "react";

function SvgSave(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M17 4H6c-1.209 0-2 .7-2 2v12c0 1.3.791 2 2 2h12c1.2 0 2-.7 2-2V7.207a.5.5 0 00-.146-.353L17 4zm0 7H7V4h10v7z"
          fillRule="nonzero"
        />
        <rect opacity={0.3} x={12} y={4} width={3} height={5} rx={0.5} />
      </g>
    </svg>
  );
}

export default SvgSave;
