import * as React from "react";

function SvgServer(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M5 2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm6 2a1 1 0 000 2h5a1 1 0 000-2h-5zM7 6a1 1 0 100-2 1 1 0 000 2z"
          opacity={0.3}
        />
        <path d="M5 9h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2zm6 2a1 1 0 000 2h5a1 1 0 000-2h-5zm-4 2a1 1 0 100-2 1 1 0 000 2zM5 16h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2zm6 2a1 1 0 000 2h5a1 1 0 000-2h-5zm-4 2a1 1 0 100-2 1 1 0 000 2z" />
      </g>
    </svg>
  );
}

export default SvgServer;
