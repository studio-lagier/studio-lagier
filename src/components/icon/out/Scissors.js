import * as React from "react";

function SvgScissors(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M7.707 11.647l-3.55-1.894a.4.4 0 01.314-.733l5.101 1.694-1.865.933zm5.025 2.68l3.637-1.357 2.263.752h-.002a3.501 3.501 0 01-1.13 6.814 3.5 3.5 0 01-3.017-5.275l-1.75-.934zm4.768 1.21a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          opacity={0.3}
        />
        <path d="M17.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-3.017.276a3.5 3.5 0 114.147 1.538h.002L4.47 15.516a.4.4 0 01-.314-.733l10.326-5.507z" />
      </g>
    </svg>
  );
}

export default SvgScissors;
