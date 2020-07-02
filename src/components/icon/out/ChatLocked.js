import * as React from "react";

function SvgChatLocked(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path opacity={0.3} d="M5 15l-2 6.5 6.5-2z" />
        <path d="M16 10v-.5a2.5 2.5 0 10-5 0v.5a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1zm-2.5 11a9.5 9.5 0 110-19 9.5 9.5 0 010 19zm0-13A1.5 1.5 0 0115 9.5v.5h-3v-.5A1.5 1.5 0 0113.5 8z" />
      </g>
    </svg>
  );
}

export default SvgChatLocked;
