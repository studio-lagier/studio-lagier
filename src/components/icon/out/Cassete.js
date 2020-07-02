import * as React from "react";

function SvgCassete(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={5} y={15} width={14} height={2} rx={1} />
        <path
          d="M6.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM17.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCassete;
