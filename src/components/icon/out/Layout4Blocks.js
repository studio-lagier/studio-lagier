import * as React from "react";

function SvgLayout4Blocks(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect x={4} y={4} width={7} height={7} rx={1.5} />
        <path
          d="M5.5 13h4a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-4A1.5 1.5 0 015.5 13zm9-9h4A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 0113 9.5v-4A1.5 1.5 0 0114.5 4zm0 9h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgLayout4Blocks;
