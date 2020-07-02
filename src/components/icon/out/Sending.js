import * as React from "react";

function SvgSending(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M8 13.167L20.447 12 8 10.833V5.772a.5.5 0 01.705-.456l13.84 6.228a.5.5 0 010 .912l-13.84 6.228A.5.5 0 018 18.228v-5.061z" />
        <path
          d="M4 16h1a1 1 0 010 2H4a1 1 0 010-2zm-3-5h4a1 1 0 010 2H1a1 1 0 010-2zm3-5h1a1 1 0 110 2H4a1 1 0 110-2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgSending;
