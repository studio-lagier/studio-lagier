import * as React from "react";

function SvgLte1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M15.45 17.403l-1.272-1.543A4.987 4.987 0 0016 12a4.987 4.987 0 00-1.81-3.85l1.276-1.54A6.986 6.986 0 0118 12a6.987 6.987 0 01-2.55 5.403zm2.571 3.065l-1.277-1.539A8.978 8.978 0 0020 12a8.978 8.978 0 00-3.248-6.922l1.28-1.538A10.977 10.977 0 0122 12c0 3.315-1.477 6.392-3.979 8.468zM8.55 17.403A6.987 6.987 0 016 12c0-2.11.94-4.07 2.534-5.39L9.81 8.15A4.987 4.987 0 008 12c0 1.514.675 2.915 1.822 3.86l-1.273 1.543zm-2.57 3.065A10.977 10.977 0 012 12c0-3.31 1.473-6.383 3.969-8.46l1.279 1.538A8.978 8.978 0 004 12a8.978 8.978 0 003.256 6.93L5.98 20.467z"
          fillRule="nonzero"
          opacity={0.3}
        />
        <circle cx={12} cy={12} r={2} />
      </g>
    </svg>
  );
}

export default SvgLte1;
