import * as React from "react";

function SvgSdCard(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 5a1 1 0 011-1h9.75a.5.5 0 01.4.2l2.75 3.667a.5.5 0 01.1.3V19a1 1 0 01-1 1H6a1 1 0 01-1-1V5zm2 1v3h2V6H7zm3 0v3h2V6h-2zm3 0v3h2V6h-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSdCard;
