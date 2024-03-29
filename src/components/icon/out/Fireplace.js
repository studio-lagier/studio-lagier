import * as React from "react";

function SvgFireplace(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M17 20v-8a5 5 0 00-10 0v8H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-2z"
          opacity={0.3}
        />
        <path d="M12.972 11.7c-.162 1.62-.648 2.487-1.458 2.6 0 0 .729-2.842-.243-4.3 0 0-.103 1.562-1.144 3.436-.488.878-1.042 1.47-1.042 2.637 0 1.666 1.706 2.527 2.918 2.527 1.212 0 2.912-.583 2.912-2.623 0-.84-.648-2.265-1.943-4.276z" />
      </g>
    </svg>
  );
}

export default SvgFireplace;
