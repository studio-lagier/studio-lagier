import { useState, useRef, useEffect } from "react";

export default function useBoundingRect(change) {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const set = () => {
    setBbox(ref && ref.current ? ref.current.getBoundingClientRect() : {});
  };

  useEffect(() => {
    set();

    if(typeof window !== "undefined") {
      window.addEventListener("resize", set);
    }
    return () => {
      if(typeof window !== "undefined") {
        window.removeEventListener("resize", set);
      }
    }
  }, [change]);

  return [bbox, ref];
}
