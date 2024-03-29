import * as React from "react";

function SvgMailError(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M12.984 18A7.5 7.5 0 004 11.15V7a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-7.016zm6.16-11.16L13 10.148 6.856 6.84a.75.75 0 10-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z" />
        <path
          d="M6.5 14a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0 7a1 1 0 110-2 1 1 0 010 2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgMailError;
