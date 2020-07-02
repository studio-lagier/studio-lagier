import * as React from "react";

function SvgAddressCard(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h12a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3zm6 9a2 2 0 100-4 2 2 0 000 4zm-5 5.5c-.011.162.265.5.404.5h9.177c.418 0 .424-.378.418-.5-.163-3.067-2.348-4.5-5.008-4.5-2.623 0-4.775 1.517-4.99 4.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgAddressCard;
