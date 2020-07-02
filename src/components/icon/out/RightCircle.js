import * as React from "react";

function SvgRightCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path
          d="M9.322 7.463a.857.857 0 011.213-1.212l5.143 5.143a.857.857 0 01.025 1.185l-4.714 5.143a.857.857 0 11-1.264-1.158l4.16-4.538-4.563-4.563z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgRightCircle;
