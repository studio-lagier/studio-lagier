import React, { createContext, useEffect, useState } from "react";
import cn from "classnames";
import useBoundingRect from "../hooks/useBoundingRect";

export const ScrollContext = createContext(0);

export function ScrollProvider({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const scrollListener = () => {
      if(typeof window !== "undefined") {
        setScrollPosition(window.scrollY);
      }
    }
    if(typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener);
    }

    return () => {
      if(typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollListener);
      }
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollPosition}>
      {children}
    </ScrollContext.Provider>
  );
}

function TriggerOnScroll({
  scrollY,
  children,
  className,
  triggeredClassName = "animation-triggered",
} = {}) {
  const [triggered, setTriggered] = useState(false);
  const [{ top }, ref] = useBoundingRect(scrollY);

  if (typeof window !== "undefined" && !triggered && top < window.outerHeight * 0.66) {
    setTriggered(true);
  }

  return (
    <div
      ref={ref}
      className={cn(className, {
        [triggeredClassName]: triggered,
      })}
    >
      {children}
    </div>
  );
}

export function ScrollListener({ children, className, triggeredClassName }) {
  return (
    <ScrollContext.Consumer>
      {scrollY => {
        return (
          <TriggerOnScroll
            scrollY={scrollY}
            className={className}
            triggeredClassName={triggeredClassName}
          >
            {children}
          </TriggerOnScroll>
        );
      }}
    </ScrollContext.Consumer>
  );
}
