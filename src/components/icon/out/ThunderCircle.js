import * as React from "react";

function SvgThunderCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path d="M12.42 17.158l3.037-6.073a.75.75 0 00-.67-1.085H12V7.177a.75.75 0 00-1.42-.335l-3.037 6.073A.75.75 0 008.213 14H11v2.823a.75.75 0 001.42.335z" />
      </g>
    </svg>
  );
}

export default SvgThunderCircle;
