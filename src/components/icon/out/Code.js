import * as React from "react";

function SvgCode(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
          fillRule="nonzero"
        />
        <rect
          opacity={0.3}
          transform="rotate(15 12 12)"
          x={11}
          y={4}
          width={2}
          height={16}
          rx={1}
        />
      </g>
    </svg>
  );
}

export default SvgCode;
