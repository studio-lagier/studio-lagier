import * as React from "react";

function SvgVisible(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M3 12s2.455-6 9-6c4.91 0 9 6 9 6s-4.09 6-9 6c-6.545 0-9-6-9-6z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M12 15a3 3 0 110-6 3 3 0 010 6z" opacity={0.3} />
      </g>
    </svg>
  );
}

export default SvgVisible;
