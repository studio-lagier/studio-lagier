import * as React from "react";

function SvgBarcodeScan(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15 9h-2V5h2v4zm0 6v5h-2v-5h2zM5 9H2V6a1 1 0 011-1h2v4zm0 6v5H3a1 1 0 01-1-1v-4h3zm13-6h-2V5h2v4zm0 6v5h-2v-5h2zm4-6h-2V5h1a1 1 0 011 1v3zm0 6v4a1 1 0 01-1 1h-1v-5h2z" />
        <path d="M9 9H7V5h2v4zm0 6v5H7v-5h2z" opacity={0.3} />
        <rect opacity={0.3} y={11} width={24} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgBarcodeScan;
