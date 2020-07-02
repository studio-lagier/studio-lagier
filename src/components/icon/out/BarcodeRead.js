import * as React from "react";

function SvgBarcodeRead(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path opacity={0.3} d="M4 4h8v16H4z" />
        <path
          d="M6 18h3c.667.114 1 .448 1 1s-.333.886-1 1H4v-5c0-.667.333-1 1-1s1 .333 1 1v3zm12 0v-3c.114-.667.448-1 1-1s.886.333 1 1v5h-5c-.667 0-1-.333-1-1s.333-1 1-1h3zm0-12h-3c-.667-.114-1-.448-1-1s.333-.886 1-1h5v5c0 .667-.333 1-1 1s-1-.333-1-1V6zM6 6v3c-.114.667-.448 1-1 1s-.886-.333-1-1V4h5c.667 0 1 .333 1 1s-.333 1-1 1H6z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgBarcodeRead;
