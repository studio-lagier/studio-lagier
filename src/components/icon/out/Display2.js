import * as React from "react";

function SvgDisplay2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path opacity={0.3} d="M6 7v8h12V7z" />
        <path
          d="M11 19v-3a1 1 0 012 0v3h1.5a.5.5 0 110 1h-5a.5.5 0 110-1H11z"
          opacity={0.3}
        />
        <path
          d="M6 7v8h12V7H6zm0-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgDisplay2;
