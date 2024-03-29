import * as React from "react";

function SvgBath(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6 10a1 1 0 01-2 0V6a3 3 0 116 0 1 1 0 11-2 0 1 1 0 10-2 0v4zM6 20H4c0-2.761 2.239-4 5-4h6c2.761 0 5 1.239 5 4h-2c0-1.657-1.343-2-3-2H9c-1.657 0-3 .343-3 2z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M2 9h21l-.506 4.552A5 5 0 0117.524 18H7.476a5 5 0 01-4.97-4.448L2 9zm17.25 2.5c0 1.43-.556 2.542-1.7 3.4a.75.75 0 00.9 1.2c1.522-1.142 2.3-2.697 2.3-4.6a.75.75 0 10-1.5 0z" />
      </g>
    </svg>
  );
}

export default SvgBath;
