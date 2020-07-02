import * as React from "react";

function SvgPhone(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M7.139 4v15h9.722V4H7.14zm.694-3h8.334c1.406 0 2.083.981 2.083 2.5v17c0 1.519-.677 2.5-2.083 2.5H7.833c-1.406 0-2.083-.981-2.083-2.5v-17c0-1.519.677-2.5 2.083-2.5z"
          fillRule="nonzero"
        />
        <path opacity={0.3} d="M7 4v15h10V4z" />
        <circle cx={12} cy={21} r={1} />
      </g>
    </svg>
  );
}

export default SvgPhone;
