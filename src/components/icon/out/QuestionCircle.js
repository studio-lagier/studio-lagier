import * as React from "react";

function SvgQuestionCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={12} cy={12} r={10} />
        <path d="M12 16a1 1 0 110 2 1 1 0 010-2zm-1.409-1.132v-1.659h1.26c1.596 0 2.751-1.218 2.751-2.814s-1.155-2.814-2.751-2.814c-1.617 0-2.73 1.218-2.73 2.814H7.336c0-2.52 1.974-4.473 4.515-4.473 2.541 0 4.536 1.953 4.536 4.473 0 2.52-1.995 4.473-4.536 4.473h-1.26z" />
      </g>
    </svg>
  );
}

export default SvgQuestionCircle;
