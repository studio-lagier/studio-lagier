import * as React from "react";

function SvgHomepod(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M17.928 4.465A5.986 5.986 0 0120 9v7a6 6 0 01-6 6h-4a6 6 0 01-6-6V9c0-1.811.803-3.435 2.072-4.535C6.518 5.9 9.002 7 12 7c2.998 0 5.482-1.1 5.928-2.535z"
          opacity={0.3}
        />
        <path d="M15.348 3.668C14.524 3.255 13.317 3 12 3c-1.317 0-2.524.255-3.348.668A2.71 2.71 0 008.125 4c.124.105.301.22.527.332C9.476 4.745 10.683 5 12 5c1.317 0 2.524-.255 3.348-.668A2.71 2.71 0 0015.875 4a2.71 2.71 0 00-.527-.332z" />
      </g>
    </svg>
  );
}

export default SvgHomepod;
