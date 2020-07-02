import React from "react";
import cn from "classnames";

export default function BlobSection({ children, id, className }) {
  return (
    <div className={cn("bg-dark blob-background", className)} id={id}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
