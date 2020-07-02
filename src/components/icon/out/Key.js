import * as React from "react";

function SvgKey(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          opacity={0.3}
          d="M11.366 10.823L5 17v3h3v-2h1.942v-2H12l2.184-2.359z"
        />
        <path d="M11.743 13.228a6 6 0 118.485-8.485 6 6 0 01-8.485 8.485zm4.318-4.046a1.5 1.5 0 102.121-2.121 1.5 1.5 0 00-2.121 2.121z" />
      </g>
    </svg>
  );
}

export default SvgKey;
