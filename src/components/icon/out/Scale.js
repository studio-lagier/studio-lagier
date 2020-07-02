import * as React from "react";

function SvgScale(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M10 14H5c-.667-.114-1-.448-1-1s.333-.886 1-1h7v7c0 .667-.333 1-1 1s-1-.333-1-1v-5zm5-5h5c.667.114 1 .448 1 1s-.333.886-1 1h-7V4c0-.667.333-1 1-1s1 .333 1 1v5z"
          fillRule="nonzero"
        />
        <path
          d="M3.879 18.707l2.828-2.828a1 1 0 011.414 1.414L5.293 20.12a1 1 0 01-1.414-1.414zm13-13l2.828-2.828a1 1 0 111.414 1.414L18.293 7.12a1 1 0 11-1.414-1.414z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgScale;
