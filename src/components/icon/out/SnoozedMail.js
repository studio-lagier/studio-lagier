import * as React from "react";

function SvgSnoozedMail(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M12.984 18A7.5 7.5 0 004 11.15V7a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2h-7.016zm6.16-11.16L13 10.148 6.856 6.84a.75.75 0 10-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z" />
        <path
          d="M8.447 18.106a1 1 0 01-.894 1.788L5 18.618V14.5a1 1 0 012 0v2.882l1.447.724z"
          fillRule="nonzero"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgSnoozedMail;
