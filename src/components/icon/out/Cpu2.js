import * as React from "react";

function SvgCpu2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={3} y={3} width={18} height={18} rx={1} />
        <path
          d="M11 11v2h2v-2h-2zm-1-2h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <rect opacity={0.3} x={5} y={5} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={5} y={9} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={5} y={13} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={9} y={5} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={13} y={5} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={17} y={5} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={17} y={9} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={17} y={13} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={5} y={17} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={9} y={17} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={13} y={17} width={2} height={2} rx={0.5} />
        <rect opacity={0.3} x={17} y={17} width={2} height={2} rx={0.5} />
      </g>
    </svg>
  );
}

export default SvgCpu2;
