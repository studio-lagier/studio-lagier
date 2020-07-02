import * as React from "react";

function SvgReadedMail(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4.875 20.75a.946.946 0 01-.67-.288l-1.917-1.916a.926.926 0 010-1.342c.383-.383 1.006-.383 1.341 0l1.246 1.246 3.162-3.162a.926.926 0 011.342 0 .926.926 0 010 1.341l-3.833 3.833a.946.946 0 01-.671.288z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M12.984 18A7.5 7.5 0 004 11.15V7a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-7.016zm6.16-11.16L13 10.148 6.856 6.84a.75.75 0 10-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z" />
      </g>
    </svg>
  );
}

export default SvgReadedMail;
