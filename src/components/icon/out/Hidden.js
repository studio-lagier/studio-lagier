import * as React from "react";

function SvgHidden(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M19.208 9.848C20.33 11.018 21 12 21 12s-4.09 6-9 6c-.31 0-.612-.014-.904-.04l8.112-8.112zM14.505 6.495L12 9a3 3 0 00-3 3l-3.473 3.473C3.75 13.833 3 12 3 12s2.455-6 9-6c.867 0 1.708.187 2.505.495z"
          fillRule="nonzero"
        />
        <path opacity={0.3} d="M5.1 18.435L18.537 5l1.414 1.414L6.515 19.85z" />
      </g>
    </svg>
  );
}

export default SvgHidden;
