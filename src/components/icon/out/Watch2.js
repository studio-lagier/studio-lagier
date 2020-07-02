import * as React from "react";

function SvgWatch2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M9 17h6v3.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 20.5V17zM12 17a5 5 0 100-10 5 5 0 000 10zM10.5 2h3A1.5 1.5 0 0115 3.5V7H9V3.5A1.5 1.5 0 0110.5 2z"
          opacity={0.3}
        />
        <path
          d="M12 17a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgWatch2;
