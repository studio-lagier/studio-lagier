import * as React from "react";

function SvgShieldProtected(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4 4l7.631-1.43a2 2 0 01.738 0L20 4v9.283a8.51 8.51 0 01-4 7.217l-3.47 2.169a1 1 0 01-1.06 0L8 20.5a8.51 8.51 0 01-4-7.217V4z"
          opacity={0.3}
        />
        <path d="M14.5 11a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3a1 1 0 011-1v-.5a2.5 2.5 0 115 0v.5zM12 9a1.5 1.5 0 00-1.5 1.5v.5h3v-.5A1.5 1.5 0 0012 9z" />
      </g>
    </svg>
  );
}

export default SvgShieldProtected;
