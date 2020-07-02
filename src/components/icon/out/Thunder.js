import * as React from "react";

function SvgThunder(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.374 19.939l5.849-8.773A.75.75 0 0017.599 10H13V4.477a.75.75 0 00-1.374-.416l-5.849 8.773A.75.75 0 006.401 14H11v5.523a.75.75 0 001.374.416z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgThunder;
