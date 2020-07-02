import * as React from "react";

function SvgAttachment1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M10.586 12l-2.122 2.121a1 1 0 001.415 1.415L12 13.414l.707.707a2 2 0 010 2.829L9.88 19.778a2 2 0 01-2.829 0L4.222 16.95a2 2 0 010-2.829l2.828-2.828a2 2 0 012.829 0l.707.707z"
          opacity={0.3}
        />
        <path d="M13.414 12l2.122-2.121a1 1 0 10-1.415-1.415L12 10.586l-.707-.707a2 2 0 010-2.829l2.828-2.828a2 2 0 012.829 0l2.828 2.828a2 2 0 010 2.829l-2.828 2.828a2 2 0 01-2.829 0L13.414 12z" />
      </g>
    </svg>
  );
}

export default SvgAttachment1;
