import * as React from "react";

function SvgUser(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M12 11a4 4 0 110-8 4 4 0 010 8z" opacity={0.3} />
        <path d="M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z" />
      </g>
    </svg>
  );
}

export default SvgUser;
