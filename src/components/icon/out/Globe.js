import * as React from "react";

function SvgGlobe(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M13 18.945V20h1a2 2 0 012 2H8a2 2 0 012-2h1v-1.055a8.972 8.972 0 01-5.206-2.427l-1.055 1.156a1 1 0 01-1.478-1.348l1.788-1.959a1 1 0 011.515.044 7 7 0 109.557-10.07 1 1 0 111.18-1.615 9.001 9.001 0 01-4.3 16.22z"
          fillRule="nonzero"
        />
        <circle opacity={0.3} cx={12} cy={10} r={6} />
      </g>
    </svg>
  );
}

export default SvgGlobe;
