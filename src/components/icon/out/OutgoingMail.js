import * as React from "react";

function SvgOutgoingMail(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M5 9h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2zm13.144 1.84L12 14.148 5.856 10.84a.75.75 0 00-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z" />
        <path
          d="M9.032 4.492h1.956V6.5a.5.5 0 00.5.5h1.024a.5.5 0 00.5-.5V4.492h1.956a.5.5 0 00.382-.823L12.382.164a.5.5 0 00-.764 0L8.65 3.669a.5.5 0 00.382.823z"
          fillRule="nonzero"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgOutgoingMail;
