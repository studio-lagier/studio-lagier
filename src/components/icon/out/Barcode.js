import * as React from "react";

function SvgBarcode(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M13 5h2v15h-2V5zM5 5v15H3a1 1 0 01-1-1V6a1 1 0 011-1h2zm11 0h2v15h-2V5zm4 0h1a1 1 0 011 1v13a1 1 0 01-1 1h-1V5z" />
        <path opacity={0.3} d="M9 5v15H7V5z" />
      </g>
    </svg>
  );
}

export default SvgBarcode;
