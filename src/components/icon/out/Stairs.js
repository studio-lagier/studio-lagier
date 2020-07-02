import * as React from "react";

function SvgStairs(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M21 5.5v12a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-3A1.5 1.5 0 014.5 13H9V9.5A1.5 1.5 0 0110.5 8H15V5.5A1.5 1.5 0 0116.5 4h3A1.5 1.5 0 0121 5.5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgStairs;
