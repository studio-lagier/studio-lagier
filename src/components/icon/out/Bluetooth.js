import * as React from "react";

function SvgBluetooth(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="nonzero">
        <path
          d="M12 13.845v4.914l3.313-1.932L12 13.845zm-2-1.8L6.331 8.743a1 1 0 011.338-1.486l10 9a1 1 0 01-.165 1.607l-6 3.5A1 1 0 0110 20.5v-8.455z"
          opacity={0.3}
        />
        <path d="M12 10.438l3.398-2.89L12 5v5.438zM10 3a1 1 0 011.6-.8l6 4.5a1 1 0 01.048 1.562l-10 8.5a1 1 0 11-1.296-1.524l3.648-3.1V3z" />
      </g>
    </svg>
  );
}

export default SvgBluetooth;
