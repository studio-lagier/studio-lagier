import * as React from "react";

function SvgRuler(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M10.586 6.343l.707.707a1 1 0 001.414-1.414L12 4.929l1.414-1.414 2.122 2.121a1 1 0 001.414-1.414L14.828 2.1a2 2 0 012.829 0l4.242 4.242a2 2 0 010 2.829L9.172 21.899a2 2 0 01-2.829 0l-4.242-4.242a2 2 0 010-2.829l2.12 2.122a1 1 0 001.415-1.414l-2.121-2.122L4.929 12l.707.707a1 1 0 101.414-1.414l-.707-.707 1.414-1.414 2.122 2.12a1 1 0 001.414-1.413L9.172 7.757l1.414-1.414z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgRuler;
