import * as React from "react";

function SvgBag1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M14 9V8a2 2 0 10-4 0v1H8V8a4 4 0 118 0v1h-2zm0 0V8a2 2 0 10-4 0v1H8V8a4 4 0 118 0v1h-2z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M6.847 9h10.306a1 1 0 01.986.836l1.473 8.835A2 2 0 0117.639 21H6.361a2 2 0 01-1.973-2.329l1.473-8.835A1 1 0 016.847 9z" />
      </g>
    </svg>
  );
}

export default SvgBag1;
