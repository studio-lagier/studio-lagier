import * as React from "react";

function SvgTimeSchedule(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M10.963 7.5h.085a.5.5 0 01.497.45L12 12.5l3.248 1.856a.5.5 0 01.252.434V15a.382.382 0 01-.482.368l-4.62-1.26a.5.5 0 01-.366-.52l.432-5.626a.5.5 0 01.499-.462z" />
        <path
          d="M7.39 2.835A10.466 10.466 0 0111.5 2C17.299 2 22 6.701 22 12.5S17.299 23 11.5 23 1 18.299 1 12.5c0-.985.136-1.938.39-2.842l1.925.54A8.509 8.509 0 003 12.5 8.5 8.5 0 1011.5 4c-.951 0-1.878.156-2.751.454l1.19 1.42a.5.5 0 01-.354.82l-4.867.276a.5.5 0 01-.515-.615l1.129-4.731a.5.5 0 01.869-.206L7.39 2.835z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgTimeSchedule;
