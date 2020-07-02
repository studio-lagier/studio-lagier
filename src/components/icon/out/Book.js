import * as React from "react";

function SvgBook(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <use
        fill="currentColor"
        fillRule="nonzero"
        xlinkHref="#book_svg__path-1"
      />
    </svg>
  );
}

export default SvgBook;
