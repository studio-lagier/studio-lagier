import React from "react";
import cn from "classnames";

export default function CircleImage({ src, alt, className }) {
  return (
    <div
      className={cn(
        "inline-block rounded-full border-white shadow overflow-hidden border-4 w-1/3 h-auto md:w-48 md:h-48 relative circle-image zoom-in",
        className
      )}
    >
      <img src={src} alt={alt} />
    </div>
  );
}
