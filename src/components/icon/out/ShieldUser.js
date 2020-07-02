import * as React from "react";

function SvgShieldUser(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4 4l7.631-1.43a2 2 0 01.738 0L20 4v9.283a8.51 8.51 0 01-4 7.217l-3.47 2.169a1 1 0 01-1.06 0L8 20.5a8.51 8.51 0 01-4-7.217V4z"
          opacity={0.3}
        />
        <path
          d="M12 11a2 2 0 110-4 2 2 0 010 4zM7 16.5c.216-2.983 2.368-4.5 4.99-4.5 2.66 0 4.846 1.433 5.009 4.5.006.122 0 .5-.418.5H7.404c-.14 0-.415-.338-.404-.5z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgShieldUser;
