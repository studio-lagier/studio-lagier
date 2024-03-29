import * as React from "react";

function SvgRouter1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15 15v-5a1 1 0 012 0v5h3a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2h11zM5 17a1 1 0 000 2h5a1 1 0 000-2H5z" />
        <path
          d="M20.5 7.716l-1.287 1.141c-.788-1.028-1.956-1.634-3.218-1.634-1.258 0-2.423.602-3.211 1.624L11.5 7.702c1.102-1.43 2.735-2.273 4.495-2.273 1.765 0 3.404.85 4.505 2.287zm3-2.255l-1.364 1.11a8.015 8.015 0 00-6.14-2.832 8.015 8.015 0 00-6.134 2.825L8.5 5.452A9.8 9.8 0 0115.996 2 9.8 9.8 0 0123.5 5.46z"
          fillRule="nonzero"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgRouter1;
