import * as React from "react";

function SvgNotification2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M13.207 4A5.5 5.5 0 0020 10.793V17a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h6.207z" />
        <circle opacity={0.3} cx={18.5} cy={5.5} r={2.5} />
      </g>
    </svg>
  );
}

export default SvgNotification2;
