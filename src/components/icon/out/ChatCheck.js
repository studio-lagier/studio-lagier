import * as React from "react";

function SvgChatCheck(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4.875 20.75a.946.946 0 01-.67-.288l-1.917-1.916a.926.926 0 010-1.342c.383-.383 1.006-.383 1.341 0l1.246 1.246 3.162-3.162a.926.926 0 011.342 0 .926.926 0 010 1.341l-3.833 3.833a.946.946 0 01-.671.288z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M2 11.865V6a3 3 0 013-3h14a3 3 0 013 3v9.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18h-5.041A7.5 7.5 0 002 11.865zM6 7a1 1 0 100 2h9a1 1 0 000-2H6z" />
      </g>
    </svg>
  );
}

export default SvgChatCheck;
