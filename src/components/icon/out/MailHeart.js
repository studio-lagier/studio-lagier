import * as React from "react";

function SvgMailHeart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6 2h12a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm7.8 2c-.644 0-1.397.73-1.8 1.2-.403-.47-1.156-1.2-1.8-1.2-1.14 0-1.8.889-1.8 2.02C8.4 7.273 9.6 8.6 12 10c2.4-1.4 3.6-2.7 3.6-3.9 0-1.131-.66-2.1-1.8-2.1z"
          opacity={0.3}
        />
        <path d="M3.793 6.573L12 12.5l8.207-5.927a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405z" />
      </g>
    </svg>
  );
}

export default SvgMailHeart;
