import * as React from "react";

function SvgMailOpened(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6 2h12a1 1 0 011 1v9a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm1.5 3a.5.5 0 000 1h6a.5.5 0 100-1h-6zm0 2a.5.5 0 000 1h3a.5.5 0 100-1h-3z"
          opacity={0.3}
        />
        <path d="M3.793 6.573L12 12.5l8.207-5.927a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405z" />
      </g>
    </svg>
  );
}

export default SvgMailOpened;
