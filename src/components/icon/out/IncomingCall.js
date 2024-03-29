import * as React from "react";

function SvgIncomingCall(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M9.86 6.012a.5.5 0 01.85.298l.524 4.709a.5.5 0 01-.552.552l-4.709-.523a.5.5 0 01-.298-.85L7.06 8.811 5.559 7.31a.5.5 0 010-.707l.707-.707a.5.5 0 01.707 0l1.502 1.501L9.86 6.012z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <path d="M12.08 14.784l2.204-2.204a2 2 0 00.375-2.309l-.125-.25a2 2 0 01.374-2.308l2.733-2.733a.5.5 0 01.801.13l1.104 2.208a4.387 4.387 0 01-.822 5.065l-5.999 5.998a5.427 5.427 0 01-5.553 1.311l-2.415-.804a.5.5 0 01-.195-.828l2.65-2.652a2 2 0 012.31-.374l.25.125a2 2 0 002.308-.375z" />
      </g>
    </svg>
  );
}

export default SvgIncomingCall;
