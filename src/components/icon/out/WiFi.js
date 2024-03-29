import * as React from "react";

function SvgWiFi(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M19.366 13.93l-2.104 1.736a6.8 6.8 0 00-5.264-2.484 6.8 6.8 0 00-5.25 2.469l-2.1-1.741a9.527 9.527 0 017.35-3.455 9.527 9.527 0 017.368 3.476zm4.18-3.504l-2.099 1.742a12.242 12.242 0 00-9.449-4.44c-3.695 0-7.12 1.641-9.44 4.428L.463 10.412A14.969 14.969 0 0111.998 5c4.521 0 8.716 2.014 11.548 5.426z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M15.119 17.354l-2.08 1.765-1.077.881-1.029-.851-2.128-1.706a4.085 4.085 0 013.193-1.534c1.217 0 2.35.536 3.121 1.445z" />
      </g>
    </svg>
  );
}

export default SvgWiFi;
