import * as React from "react";

function SvgOutgoingBox(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M22 17v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4h4.28l.543 1.632A2 2 0 008.721 20h6.661a2 2 0 001.789-1.106L18.118 17H22z" />
        <path
          d="M2.563 15l3.364-5.98A2 2 0 017.67 8h8.66a2 2 0 011.743 1.02L21.437 15h-3.319a2 2 0 00-1.789 1.106L15.382 18H8.721l-.544-1.632A2 2 0 006.279 15H2.563z"
          opacity={0.3}
        />
        <path
          d="M9.032 4.492h1.956V6.5a.5.5 0 00.5.5h1.024a.5.5 0 00.5-.5V4.492h1.956a.5.5 0 00.382-.823L12.382.164a.5.5 0 00-.764 0L8.65 3.669a.5.5 0 00.382.823z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgOutgoingBox;
