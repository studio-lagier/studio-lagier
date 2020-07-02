import * as React from "react";

function SvgAddUser(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M18 8h-2a1 1 0 010-2h2V4a1 1 0 012 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V8zm-9 3a4 4 0 110-8 4 4 0 010 8z"
          opacity={0.3}
        />
        <path d="M0 20.2C.389 15.426 4.263 13 8.984 13c4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H.727c-.25 0-.747-.54-.726-.8z" />
      </g>
    </svg>
  );
}

export default SvgAddUser;
