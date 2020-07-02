import * as React from "react";

function SvgMailNotification(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M21 12.083A6 6 0 0014.083 19H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v4.083zM18.144 7.84L12 11.148 5.856 7.84a.75.75 0 10-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z" />
        <circle opacity={0.3} cx={19.5} cy={17.5} r={2.5} />
      </g>
    </svg>
  );
}

export default SvgMailNotification;
