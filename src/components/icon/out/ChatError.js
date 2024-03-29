import * as React from "react";

function SvgChatError(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M2 11.865V6a3 3 0 013-3h14a3 3 0 013 3v9.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18h-5.041A7.5 7.5 0 002 11.865zM6 7a1 1 0 100 2h9a1 1 0 000-2H6z" />
        <path
          d="M6 14a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0 7a1 1 0 110-2 1 1 0 010 2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgChatError;
