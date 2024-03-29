import * as React from "react";

function SvgGithub(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M16.543 17.457L11 11.914V4a1 1 0 012 0v7.086l4.957 4.957 2.19-2.19a.5.5 0 01.853.354V19.5a.5.5 0 01-.5.5h-5.293a.5.5 0 01-.353-.854l1.689-1.689z" />
        <path
          d="M7.245 17.145l2.001 2.001a.5.5 0 01-.353.854H3.529a.5.5 0 01-.5-.5v-5.364a.5.5 0 01.853-.354l1.944 1.944 3.028-2.563 1.292 1.527-2.901 2.455z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgGithub;
