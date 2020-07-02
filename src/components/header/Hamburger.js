import React from "react";
import cn from "classnames";

export default function Hamburger({ className, isOpen, onClick }) {
  return (
    <button
      className={cn(
        "hamburger",
        "hamburger--spin",
        {
          "is-active": isOpen,
        },
        className
      )}
      onClick={onClick}
    >
      <span className="hamburger-box">
        <span className={cn("hamburger-inner")} />
      </span>
    </button>
  );
}
