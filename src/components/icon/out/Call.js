import * as React from "react";

function SvgCall(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.386-8.787a1.462 1.462 0 01-1.688.274 1.462 1.462 0 00-1.688.274l-1.511 1.51a.5.5 0 00.195.829l1.354.451c1.3.433 2.733.095 3.702-.874l4-4c.89-.89 1.11-2.25.547-3.375l-.632-1.266a.5.5 0 00-.8-.13L13.5 8.5a1.462 1.462 0 00-.274 1.688 1.462 1.462 0 01-.274 1.688l-1.338 1.338z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgCall;
