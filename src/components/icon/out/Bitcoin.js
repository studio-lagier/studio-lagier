import * as React from "react";

function SvgBitcoin(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <rect opacity={0.3} x={11} y={2} width={2} height={5} rx={1} />
        <rect opacity={0.3} x={11} y={16} width={2} height={5} rx={1} />
        <path d="M17.875 14.086c0 .735-.146 1.352-.437 1.852-.291.5-.678.903-1.159 1.207a5.05 5.05 0 01-1.643.655 8.91 8.91 0 01-1.891.2H7V4.548h5.745c.52 0 1.051.054 1.596.162a4.719 4.719 0 011.482.55c.443.26.804.612 1.083 1.055.279.443.418 1.007.418 1.691 0 .747-.203 1.365-.608 1.852-.405.488-.937.84-1.596 1.055.38.101.738.218 1.074.39.335.17.626.389.873.655.248.266.444.576.59.931.145.355.218.754.218 1.197zm-3.686-5.643c0-.456-.174-.788-.523-.997-.348-.21-.864-.314-1.548-.314h-1.596v2.774h1.748c.608 0 1.08-.123 1.415-.37.336-.248.504-.612.504-1.093zm.437 5.339c0-.557-.209-.944-.627-1.159-.418-.215-.975-.323-1.672-.323h-1.805v3.078h1.824c.253 0 .516-.022.788-.066a2.48 2.48 0 00.742-.238c.221-.114.402-.275.541-.485.14-.209.209-.478.209-.807z" />
      </g>
    </svg>
  );
}

export default SvgBitcoin;
