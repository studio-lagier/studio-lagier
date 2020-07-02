import * as React from "react";

function SvgDeleteUser(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M9 11a4 4 0 110-8 4 4 0 010 8zm12-3h-4a1 1 0 010-2h4a1 1 0 010 2z"
          opacity={0.3}
        />
        <path d="M0 20.2C.389 15.426 4.263 13 8.984 13c4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H.727c-.25 0-.747-.54-.726-.8z" />
      </g>
    </svg>
  );
}

export default SvgDeleteUser;
