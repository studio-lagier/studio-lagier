import * as React from "react";

function SvgBookmark(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M8 4h8a2 2 0 012 2v11.727a1 1 0 01-1.676.737l-3.648-3.345a1 1 0 00-1.352 0l-3.648 3.345A1 1 0 016 17.727V6a2 2 0 012-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgBookmark;
