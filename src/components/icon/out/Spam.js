import * as React from "react";

function SvgSpam(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M4.5 3h15A1.5 1.5 0 0121 4.5v15a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3zM8 5a1 1 0 100 2h8a1 1 0 000-2H8zm2.586 9l-1.414 1.414a1 1 0 101.414 1.414L12 15.414l1.414 1.414a1 1 0 101.414-1.414L13.414 14l1.414-1.414a1 1 0 10-1.414-1.414L12 12.586l-1.414-1.414a1 1 0 10-1.414 1.414L10.586 14z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgSpam;
