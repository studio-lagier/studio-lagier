import * as React from "react";

function SvgMirror(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M13 17.048V18h1a2 2 0 012 2H8a2 2 0 012-2h1v-.952A8.996 8.996 0 013.076 9.22a1 1 0 011.985-.244 6.995 6.995 0 0013.891-.098 1 1 0 011.989.216A8.995 8.995 0 0113 17.048z"
          fillRule="nonzero"
        />
        <path
          d="M12 14a6 6 0 110-12 6 6 0 010 12zM8.816 7.8a.656.656 0 10-1.31.092c.117 1.661.89 2.972 2.289 3.875a.656.656 0 00.712-1.102C9.456 9.985 8.903 9.049 8.816 7.8z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgMirror;
