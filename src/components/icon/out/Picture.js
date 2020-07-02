import * as React from "react";

function SvgPicture(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={2} y={4} width={20} height={16} rx={2} />
        <path opacity={0.3} d="M4 20l6.5-9 6.5 9z" />
        <path d="M11 20l4.5-6 4.5 6z" />
        <circle opacity={0.3} cx={18.5} cy={8.5} r={1.5} />
      </g>
    </svg>
  );
}

export default SvgPicture;
