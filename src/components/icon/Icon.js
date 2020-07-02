import React from "react";

import Admin from "./out/LayoutTopPanel5";
import Alert from "./out/Diagnostics";
import Chart from "./out/Picture";
import Chat from "./out/GroupChat";
import Clock from "./out/Clock";
import DB from "./out/Server";
import Money from "./out/Money";
import NodeJs from "./out/NodejsIcon";
import Report from "./out/ClipboardList";

function getSvgFromIconType(iconType) {
  switch (iconType) {
    case "nodejs":
      return NodeJs;
    case "money":
      return Money;
    case "interface":
      return Admin;
    case "database":
      return DB;
    case "clock":
      return Clock;
    case "chat":
      return Chat;
    case "chart":
      return Chart;
    case "report":
      return Report;
    case "alert":
      return Alert;
    default:
      break;
  }
}

export default function Icon({ iconType }) {
  return getSvgFromIconType(iconType)({
    width: 28,
    height: 28,
    className: "text-afternoon inline-block mr-2",
  });
}
