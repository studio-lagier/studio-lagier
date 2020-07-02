import * as React from "react";

function SvgTrash(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M6 8h12l-.893 11.615A1.5 1.5 0 0115.61 21H8.389a1.5 1.5 0 01-1.496-1.385L6 8zm2 2l.454 4.09 7.098-.056L16 10H8z"
          fillRule="nonzero"
        />
        <path
          d="M14 4.5v-1a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v1H5.5A.5.5 0 005 5v.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H14z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgTrash;
