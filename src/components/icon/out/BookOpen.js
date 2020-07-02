import * as React from "react";

function SvgBookOpen(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M13.686 18.708C15.91 17.82 18.683 17.25 22 17V5.506a.5.5 0 00-.513-.5C18.658 5.078 15.83 5.743 13 7v11.244a.5.5 0 00.686.464z" />
        <path
          d="M10.314 18.708C8.09 17.82 5.317 17.25 2 17V5.506a.5.5 0 01.513-.5C5.342 5.078 8.17 5.743 11 7v11.244a.5.5 0 01-.686.464z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgBookOpen;
