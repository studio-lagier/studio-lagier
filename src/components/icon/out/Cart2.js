import * as React from "react";

function SvgCart2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M12 4.562L7.768 9.64a1 1 0 11-1.536-1.28l5-6a1 1 0 011.536 0l5 6a1 1 0 11-1.536 1.28L12 4.562z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M3.28 9h17.44a1 1 0 01.97 1.243l-2.122 8.485A3 3 0 0116.658 21H7.342a3 3 0 01-2.91-2.272L2.31 10.243A1 1 0 013.28 9zM12 12a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm-5.035.136a1 1 0 00-.707 1.225l1.035 3.864a1 1 0 101.932-.518l-1.036-3.864a1 1 0 00-1.224-.707zm10.07 0a1 1 0 00-1.224.707l-1.036 3.864a1 1 0 001.932.518l1.035-3.864a1 1 0 00-.707-1.225z" />
      </g>
    </svg>
  );
}

export default SvgCart2;
