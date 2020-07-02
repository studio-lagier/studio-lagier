import * as React from "react";

function SvgGroupChat(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M16 15.632V12a3 3 0 00-3-3H6.162V5.526A2.526 2.526 0 018.688 3h11.79a2.526 2.526 0 012.526 2.526v7.58l.017 4.68a.5.5 0 01-.854.356l-2.51-2.51H16z" />
        <path
          d="M1.985 18v-5a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2H4.101l-1.244 1.19a.5.5 0 01-.846-.36v-2.506A2.014 2.014 0 011.985 18zM6.5 14a.5.5 0 100 1h5a.5.5 0 100-1h-5zm3 2a.5.5 0 100 1h2a.5.5 0 100-1h-2z"
          opacity={0.3}
        />
      </g>
    </svg>
  );
}

export default SvgGroupChat;
