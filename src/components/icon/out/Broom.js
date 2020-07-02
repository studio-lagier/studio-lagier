import * as React from "react";

function SvgBroom(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M10.528 22.528l-1.73-1.73 1.197-2.352-2.64.91-2.306-2.307 3.105-5.412-5.412 3.105L1.3 13.3l7.965-5.269a4.677 4.677 0 016.343 1.122 5.82 5.82 0 01-.108 7.06l-4.972 6.315z"
          opacity={0.3}
        />
        <path d="M14.993 6.679L19.01 2.66A2 2 0 1121.84 5.49l-4.024 4.024a7.67 7.67 0 00-.619-.985 6.123 6.123 0 00-2.203-1.85z" />
      </g>
    </svg>
  );
}

export default SvgBroom;
