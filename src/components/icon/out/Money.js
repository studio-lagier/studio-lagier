import * as React from "react";

function SvgMoney(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M3.877 3.746l18.352 4.917a1 1 0 01.707 1.225l-2.588 9.66a1 1 0 01-1.225.706L.771 15.337a1 1 0 01-.707-1.225l2.588-9.66a1 1 0 011.225-.706zm6.588 12.118a4 4 0 102.07-7.728 4 4 0 00-2.07 7.728z"
          opacity={0.3}
        />
        <path d="M2 6h19a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1zm9.5 10a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
      </g>
    </svg>
  );
}

export default SvgMoney;
