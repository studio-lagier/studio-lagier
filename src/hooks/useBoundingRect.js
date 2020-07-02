import { useState, useRef, useEffect } from "react";

export default function useBoundingRect(change) {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const set = () => {
    setBbox(ref && ref.current ? ref.current.getBoundingClientRect() : {});
  };

  useEffect(() => {
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, [change]);

  return [bbox, ref];
}
