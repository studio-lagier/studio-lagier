import * as React from "react";

function SvgCreditCard(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={2} y={5} width={20} height={14} rx={2} />
        <path d="M2 8h20v3H2z" />
        <rect opacity={0.3} x={16} y={14} width={4} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgCreditCard;
