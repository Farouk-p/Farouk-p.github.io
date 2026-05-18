"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, threshold = 0.1, className = "", as: Component = "div", ...props }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <Component ref={ref} className={`reveal ${isVisible ? "visible" : ""} ${className}`} {...props}>
      {children}
    </Component>
  );
}
