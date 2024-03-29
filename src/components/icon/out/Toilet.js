import * as React from "react";

function SvgToilet(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={6} y={1} width={12} height={4} rx={1} />
        <path d="M17.86 12.887c.092.52.14 1.06.14 1.613 0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5c0-.554.048-1.094.14-1.613l.641-5.135A2 2 0 018.766 6h6.468a2 2 0 011.985 1.752l.642 5.135zM12 20c2.21 0 4-2.239 4-5s-1.79-5-4-5-4 2.239-4 5 1.79 5 4 5z" />
        <path
          d="M11 14h2a.5.5 0 01.5.5v1a1.5 1.5 0 01-3 0v-1a.5.5 0 01.5-.5z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgToilet;
