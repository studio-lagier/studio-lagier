import * as React from "react";

function SvgDisplay3(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path opacity={0.3} d="M5 7v8h14V7z" />
        <path
          d="M11 19v-3a1 1 0 012 0v3h1.5a.5.5 0 110 1h-5a.5.5 0 110-1H11z"
          opacity={0.3}
        />
        <path
          d="M5 7v8h14V7H5zm.25-2h13.5C19.993 5 21 5.895 21 7v8c0 1.105-1.007 2-2.25 2H5.25C4.007 17 3 16.105 3 15V7c0-1.105 1.007-2 2.25-2z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgDisplay3;
