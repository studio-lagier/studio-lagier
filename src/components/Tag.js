import React from "react";
import Icon from "./icon/Icon";

export default function Tag({ icon, children }) {
  return (
    <span className="px-4 py-2 rounded-md bg-white border m-1 inline-block text-lg font-bold align-middle tag">
      {icon && <Icon iconType={icon} />}
      {children}
    </span>
  );
}
