import * as React from "react";

function SvgCart3(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M12 4.562L7.768 9.64a1 1 0 11-1.536-1.28l5-6a1 1 0 011.536 0l5 6a1 1 0 11-1.536 1.28L12 4.562z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M3.5 9h17a1 1 0 01.923 1.385l-3.654 8.769A3 3 0 0115 21H9a3 3 0 01-2.77-1.846l-3.653-8.77A1 1 0 013.5 9zm8.5 8a2 2 0 100-4 2 2 0 000 4z" />
      </g>
    </svg>
  );
}

export default SvgCart3;
