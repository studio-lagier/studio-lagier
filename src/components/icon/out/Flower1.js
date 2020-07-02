import * as React from "react";

function SvgFlower1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M5.133 2.036c6.945 3.876 9.445 8.206 7.5 12.99-4.97-.79-7.47-5.12-7.5-12.99z"
          opacity={0.3}
        />
        <path
          d="M18.742 2.036c-6.945 3.876-9.445 8.206-7.5 12.99 4.97-.79 7.47-5.12 7.5-12.99z"
          opacity={0.3}
        />
        <path
          d="M12 1c-4.076 6.83-4.076 11.83 0 15 3.91-3.17 3.91-8.17 0-15z"
          opacity={0.3}
        />
        <path d="M6.344 13h11.312a1 1 0 01.958 1.287l-2.186 7.288A2 2 0 0114.512 23H9.488a2 2 0 01-1.916-1.425l-2.186-7.288A1 1 0 016.344 13z" />
      </g>
    </svg>
  );
}

export default SvgFlower1;
