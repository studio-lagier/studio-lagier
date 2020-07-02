import React from "react";
import cn from "classnames";
import { ScrollListener } from "../ScrollListener";

export default function PortfolioSection({
  img,
  alt,
  swap,
  title,
  children,
  link,
  linkText,
}) {
  const Image = (
    <div className="portfolio-image mb-12 md:mb-0">
      <img
        src={img}
        alt={alt}
        className={cn("build-1 rounded-md shadow-lg", {
          "slide-left": swap,
          "slide-right": !swap,
        })}
      />
    </div>
  );

  return (
    <ScrollListener className="flex flex-col md:flex-row py-12 items-center">
      {!swap && Image}
      <div
        className={cn("portfolio-text build-2 text-left", {
          "md:text-right": swap,
          "sm:pl-8": !swap,
          "sm:pr-8": swap,
          "lg:pl-20": !swap,
          "lg:pr-20": swap,
          "slide-left": !swap,
          "slide-right": swap,
        })}
      >
        <h3 className="text-3xl font-bold pb-4">{title}</h3>
        <p className="text-lg pb-4">{children}</p>
        <a
          className="text-xl text-afternoon font-bold hover:text-dusk"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      </div>
      {swap && Image}
    </ScrollListener>
  );
}
