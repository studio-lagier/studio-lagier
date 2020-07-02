import * as React from "react";

function SvgBox3(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M20.406 6.736A1 1 0 0121 7.65v8.762a1 1 0 01-.514.874l-8 4.444a1 1 0 01-.972 0l-8-4.444A1 1 0 013 16.412V7.65a1 1 0 01.594-.914l8-3.555a1 1 0 01.812 0l8 3.555z"
          opacity={0.3}
        />
        <path d="M14.967 4.224L7.6 8.317v4.589l2 1V9.494l7.655-4.253z" />
      </g>
    </svg>
  );
}

export default SvgBox3;
