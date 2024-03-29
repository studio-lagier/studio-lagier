import * as React from "react";

function SvgUrgentMail(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M12.704 14l2.963-4h-2.223V6L9 12h2.222v2H6a1 1 0 01-1-1V3a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1h-5.296z"
          opacity={0.3}
        />
        <path d="M9.804 10.914L9 12h2.222v4l4.445-6h-.205l4.745-3.427a.5.5 0 01.793.405V17a2 2 0 01-2 2H5a2 2 0 01-2-2V6.978a.5.5 0 01.793-.405l6.011 4.341z" />
      </g>
    </svg>
  );
}

export default SvgUrgentMail;
