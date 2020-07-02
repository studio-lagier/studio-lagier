import * as React from "react";

function SvgTv2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M3 5h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm6.632 5.066h1.4V9.044H7.035v1.022h1.4V14h1.197v-3.934zM14.935 14l1.911-4.956h-1.323l-1.141 3.514h-.028l-1.148-3.514h-1.344L13.738 14h1.197z" />
        <rect opacity={0.3} x={3} y={19} width={18} height={1} rx={0.5} />
      </g>
    </svg>
  );
}

export default SvgTv2;
