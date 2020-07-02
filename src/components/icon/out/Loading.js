import * as React from "react";

function SvgLoading(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M12 4v2a6 6 0 11-5.24 3.075L5.014 8.1A8 8 0 1012 4z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgLoading;
