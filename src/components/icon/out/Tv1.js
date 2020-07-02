import * as React from "react";

function SvgTv1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4.5 6h15c1.38 0 2.5.97 2.5 2.167v8.666C22 18.03 20.88 19 19.5 19h-15C3.12 19 2 18.03 2 16.833V8.167C2 6.97 3.12 6 4.5 6zM4 8v9h16V8H4z"
          fillRule="nonzero"
        />
        <path opacity={0.3} d="M4 8v9h16V8z" />
        <rect opacity={0.3} x={7} y={20} width={10} height={1} rx={0.5} />
      </g>
    </svg>
  );
}

export default SvgTv1;
