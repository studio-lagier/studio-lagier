import * as React from "react";

function SvgFlower3(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M1.415 4.84c9.763 5.496 13.293 11.61 10.588 18.34C5.025 22.04 1.496 15.926 1.415 4.84z"
          opacity={0.3}
        />
        <path
          d="M22.595 4.84c-9.763 5.496-13.292 11.61-10.588 18.34 6.978-1.14 10.508-7.253 10.588-18.34z"
          opacity={0.3}
        />
        <path
          d="M12 2c-5.707 9.641-5.707 16.7 0 21.176C17.474 18.7 17.474 11.641 12 2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgFlower3;
