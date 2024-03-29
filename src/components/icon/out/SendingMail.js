import * as React from "react";

function SvgSendingMail(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4 16h1a1 1 0 010 2H4a1 1 0 010-2zm-3-5h4a1 1 0 010 2H1a1 1 0 010-2zm2-5h2a1 1 0 110 2H3a1 1 0 110-2z"
          opacity={0.3}
        />
        <path d="M10 6h12a2 2 0 012 2v8a2 2 0 01-2 2H10a2 2 0 01-2-2V8a2 2 0 012-2zm11.085 2.072L16 10.719l-5.085-2.647a.632.632 0 00-.84.244.59.59 0 00.252.812l5.379 2.8a.64.64 0 00.588 0l5.38-2.8a.59.59 0 00.252-.812.632.632 0 00-.841-.244z" />
      </g>
    </svg>
  );
}

export default SvgSendingMail;
