import * as React from "react";

function SvgHeart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.5 4.5c-1.61 0-3.492 1.825-4.5 3-1.008-1.175-2.89-3-4.5-3C4.651 4.5 3 6.722 3 9.55c0 3.133 3 6.45 9 9.95 6-3.5 9-6.75 9-9.75 0-2.828-1.651-5.25-4.5-5.25z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgHeart;
