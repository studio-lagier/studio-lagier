import * as React from "react";

function SvgLeftCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path
          d="M14.678 7.463a.857.857 0 00-1.213-1.212l-5.143 5.143a.857.857 0 00-.025 1.185l4.714 5.143a.857.857 0 101.264-1.158l-4.16-4.538 4.563-4.563z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgLeftCircle;
