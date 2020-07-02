import * as React from "react";

function SvgEuro(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M4.362 10.276l.5-1A.5.5 0 015.309 9h9.882a.5.5 0 01.447.724l-.5 1a.5.5 0 01-.447.276H4.809a.5.5 0 01-.447-.724zm10.276 3.448l-.5 1a.5.5 0 01-.447.276H4.809a.5.5 0 01-.447-.724l.5-1A.5.5 0 015.309 13h8.882a.5.5 0 01.447.724z"
          opacity={0.3}
        />
        <path d="M17.369 7.618a3.388 3.388 0 00-1.533-1.166 5.079 5.079 0 00-1.848-.367c-.77 0-1.47.14-2.1.42-.63.28-1.172.665-1.627 1.155a5.132 5.132 0 00-1.05 1.722 6.091 6.091 0 00-.368 2.142c0 .812.119 1.554.357 2.226a5.02 5.02 0 001.019 1.732c.44.484.969.858 1.585 1.124.616.266 1.309.399 2.079.399.798 0 1.505-.157 2.121-.473a4.146 4.146 0 001.491-1.249l2.121 1.491a6.796 6.796 0 01-2.415 1.921c-.952.456-2.065.683-3.339.683-1.162 0-2.23-.192-3.203-.578a7.378 7.378 0 01-2.509-1.617 7.361 7.361 0 01-1.638-2.477c-.392-.96-.588-2.02-.588-3.182 0-1.19.206-2.264.62-3.223a7.179 7.179 0 011.7-2.447A7.552 7.552 0 0110.796 4.3c.98-.364 2.044-.546 3.192-.546.476 0 .973.045 1.491.136a7.585 7.585 0 011.491.42c.476.19.924.424 1.344.704.42.28.777.616 1.071 1.008l-2.016 1.596z" />
      </g>
    </svg>
  );
}

export default SvgEuro;
