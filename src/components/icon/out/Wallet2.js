import * as React from "react";

function SvgWallet2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={2} y={2} width={10} height={12} rx={2} />
        <path d="M4 6h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm14 10a2 2 0 100-4 2 2 0 000 4z" />
      </g>
    </svg>
  );
}

export default SvgWallet2;
