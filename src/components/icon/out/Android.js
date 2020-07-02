import * as React from "react";

function SvgAndroid(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M7.5 4v15h9V4h-9zm.214-2h8.572C17.232 2 18 2.895 18 4v16c0 1.105-.768 2-1.714 2H7.714C6.768 22 6 21.105 6 20V4c0-1.105.768-2 1.714-2z"
          fillRule="nonzero"
        />
        <path opacity={0.3} d="M7.5 4v15h9V4z" />
      </g>
    </svg>
  );
}

export default SvgAndroid;
