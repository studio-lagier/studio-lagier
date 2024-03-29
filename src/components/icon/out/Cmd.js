import * as React from "react";

function SvgCmd(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M9 15H7.5A1.5 1.5 0 109 16.5V15zm0 0V9h6v6H9zm6 1.5a1.5 1.5 0 101.5-1.5H15v1.5zM16.5 9A1.5 1.5 0 1015 7.5V9h1.5zM9 7.5A1.5 1.5 0 107.5 9H9V7.5zm2 5.5h2v-2h-2v2zm2-2V7.5a3.5 3.5 0 113.5 3.5H13zm3.5 2a3.5 3.5 0 11-3.5 3.5V13h3.5zM11 16.5A3.5 3.5 0 117.5 13H11v3.5zM7.5 11A3.5 3.5 0 1111 7.5V11H7.5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCmd;
