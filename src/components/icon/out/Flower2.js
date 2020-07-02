import * as React from "react";

function SvgFlower2(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <circle opacity={0.3} cx={15} cy={17} r={5} />
        <circle opacity={0.3} cx={9} cy={17} r={5} />
        <circle opacity={0.3} cx={7} cy={11} r={5} />
        <circle opacity={0.3} cx={17} cy={11} r={5} />
        <circle opacity={0.3} cx={12} cy={7} r={5} />
      </g>
    </svg>
  );
}

export default SvgFlower2;
