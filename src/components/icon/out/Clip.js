import * as React from "react";

function SvgClip(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M11.086 16.036L9.672 14.62l2.474-2.475a1.5 1.5 0 00-2.12-2.12L6.49 13.56a3.5 3.5 0 004.95 4.95l7.07-7.072a3.5 3.5 0 000-4.95l-.353-.353a3 3 0 00-4.243 0L12.5 4.722a5 5 0 017.071 0l.354.353a5.5 5.5 0 010 7.779l-7.071 7.07a5.5 5.5 0 01-7.779-7.778l3.536-3.535a3.5 3.5 0 014.95 4.95l-2.475 2.475z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgClip;
