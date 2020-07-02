import * as React from "react";

function SvgPrinter(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 17v4a1 1 0 01-1 1H9a1 1 0 01-1-1v-4H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-3zm1.5-6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 14v6h4v-6h-4z" />
        <rect opacity={0.3} x={8} y={2} width={8} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgPrinter;
