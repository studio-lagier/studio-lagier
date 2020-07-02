import * as React from "react";

function SvgContact1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path
          d="M12 11a2 2 0 110-4 2 2 0 010 4zm-5 5.5c.216-2.983 2.368-4.5 4.99-4.5 2.66 0 4.846 1.433 5.009 4.5.006.122 0 .5-.418.5H7.404c-.14 0-.415-.338-.404-.5z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgContact1;
