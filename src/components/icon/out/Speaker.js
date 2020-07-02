import * as React from "react";

function SvgSpeaker(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 17a4 4 0 110-8 4 4 0 010 8zm0-12a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" opacity={0.3} />
      </g>
    </svg>
  );
}

export default SvgSpeaker;
