import * as React from "react";

function SvgClipboardList(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z"
          opacity={0.3}
        />
        <path d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z" />
        <rect opacity={0.3} x={10} y={9} width={7} height={2} rx={1} />
        <rect opacity={0.3} x={7} y={9} width={2} height={2} rx={1} />
        <rect opacity={0.3} x={7} y={13} width={2} height={2} rx={1} />
        <rect opacity={0.3} x={10} y={13} width={7} height={2} rx={1} />
        <rect opacity={0.3} x={7} y={17} width={2} height={2} rx={1} />
        <rect opacity={0.3} x={10} y={17} width={7} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgClipboardList;
