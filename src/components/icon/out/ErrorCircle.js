import * as React from "react";

function SvgErrorCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path d="M12.036 10.621l2.828-2.828a1 1 0 011.414 1.414l-2.828 2.829 2.828 2.828a1 1 0 01-1.414 1.414l-2.828-2.828-2.829 2.828a1 1 0 11-1.414-1.414l2.828-2.828-2.828-2.829a1 1 0 011.414-1.414l2.829 2.828z" />
      </g>
    </svg>
  );
}

export default SvgErrorCircle;
