import * as React from "react";

function SvgUsbStorage(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M11.5 17.45L6.55 12.5a1 1 0 010-1.414l7.071-7.071a2 2 0 012.829 0l3.535 3.535a2 2 0 010 2.829l-7.07 7.07a1 1 0 01-1.415 0z" />
        <path
          d="M6.904 19.925l-2.829-2.829a.5.5 0 010-.707l2.475-2.475 3.536 3.536-2.475 2.475a.5.5 0 01-.707 0z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgUsbStorage;
