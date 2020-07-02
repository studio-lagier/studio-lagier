import * as React from "react";

function SvgAdressBook2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M18 2h2a3 3 0 013 3v14a3 3 0 01-3 3h-2V2z" opacity={0.3} />
        <path d="M5 2h12a3 3 0 013 3v14a3 3 0 01-3 3H5a1 1 0 01-1-1V3a1 1 0 011-1zm7 9a2 2 0 100-4 2 2 0 000 4zm-5 5.5c-.011.162.265.5.404.5h9.177c.418 0 .424-.378.418-.5-.163-3.067-2.348-4.5-5.008-4.5-2.623 0-4.775 1.517-4.99 4.5z" />
      </g>
    </svg>
  );
}

export default SvgAdressBook2;
