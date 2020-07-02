import * as React from "react";

function SvgLaptop(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6 8v8h12V8H6zm14 8h1.382a1 1 0 01.894.553L22.5 17a.691.691 0 01-.618 1H2.118a.691.691 0 01-.618-1l.224-.447A1 1 0 012.618 16H4V8a2 2 0 012-2h12a2 2 0 012 2v8z"
          fillRule="nonzero"
        />
        <path opacity={0.3} d="M6 8v8h12V8z" />
      </g>
    </svg>
  );
}

export default SvgLaptop;
