import * as React from "react";

function SvgStop(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm7.071-15.071a1 1 0 010 1.414L6.343 19.071a1 1 0 01-1.414-1.414L17.657 4.929a1 1 0 011.414 0z"
        fill="currentColor"
        fillRule="nonzero"
        opacity={0.3}
      />
    </svg>
  );
}

export default SvgStop;
