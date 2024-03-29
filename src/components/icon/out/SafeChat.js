import * as React from "react";

function SvgSafeChat(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M8 17a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3a1 1 0 011-1v-.5a2.5 2.5 0 115 0v.5zm-2.5-2A1.5 1.5 0 004 16.5v.5h3v-.5A1.5 1.5 0 005.5 15z"
          opacity={0.3}
        />
        <path d="M2 11.865V6a3 3 0 013-3h14a3 3 0 013 3v9.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18h-5.041A7.5 7.5 0 002 11.865zM6 7a1 1 0 100 2h9a1 1 0 000-2H6z" />
      </g>
    </svg>
  );
}

export default SvgSafeChat;
